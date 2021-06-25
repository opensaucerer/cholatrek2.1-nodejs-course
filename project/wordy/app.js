const express = require('express');
const mongoose = require('mongoose');
const { Post } = require('./models/post');
const bodyParser = require('body-parser');

const app = express();

// setting the app defaults
app.set('view engine', 'ejs');

// setting up middlewares
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connecting to the database
dbURI =
  'mongodb+srv://TestUser:testtest@samperfect.fn35f.mongodb.net/wordy?retryWrites=true&w=majority';

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(5000, () => {
      console.log('App is listening on port 5000...');
    });
  })
  .catch((error) => console.log(error));

//   homepage
app.get('/', (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      //   console.log(result);
      res.render('home', { posts: result });
    })
    .catch((error) => {
      console.log(error);
    });
});

// new post
app.get('/new_post', (req, res) => {
  res.render('new_post');
});

// publish new post
app.post('/new_post', async (req, res) => {
  // save data to the database
  try {
    const post = new Post(req.body);
    result = await post.save();
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

// retrieve single post
app.get('/posts/read/:id', (req, res) => {
  const id = req.params.id;
  //   console.log(id);
  Post.findById(id)
    .then((result) => {
      res.render('post', { post: result });
    })
    .catch((error) => {
      console.log(error);
    });
  //   res.render('new_post');
});

// updating a post
app.get('/update_post/:id', (req, res) => {
  const id = req.params.id;
  Post.findById(id)
    .then((result) => {
      res.render('update_post', { post: result });
    })
    .catch((error) => {
      console.log(error);
    });
});

// API for updating our post
app.put('/update_post/:id', (req, res) => {
  const id = req.params.id;
  // console.log(req.body);
  Post.findByIdAndUpdate(id, req.body)
    .then((result) => {
      res.json({
        status: true,
        message: 'Post updated successfully',
        redirect: '/',
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: false,
        error: 'Post update failed',
      });
    });
});

// API for deleting post
app.delete('/delete_post/:id', (req, res) => {
  const id = req.params.id;

  Post.findByIdAndDelete(id)
    .then((result) => {
      res.json({
        status: true,
        message: 'Post deleted successfully',
        redirect: '/',
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: false,
        error: 'Post delete failed',
      });
    });
});
