const express = require('express');
const mongoose = require('mongoose');
const { Post } = require('./models/post');

const app = express();

// setting the app defaults
app.set('view engine', 'ejs');

// setting up middlewares
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

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
  res.render('home');
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
    log(error);
  }
});

// new post
app.get('/new_post', (req, res) => {
  res.render('new_post');
});
