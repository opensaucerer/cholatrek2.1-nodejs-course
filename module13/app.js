const express = require('express');
const mongoose = require('mongoose');
const { Post } = require('./models/posts');

// instantiating the application
const app = express();

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

app.get('/', async (req, res) => {
  try {
    const new_post = new Post({
      title: 'This is our third post',
      snippet: 'This is a snippet to our third post. Snippets are awesome!',
      content:
        'This is our third post on how to use mongoose to connect to a MongoDB database online. It has been interesting so far.',
    });

    result = await new_post.save();
    res.send(result);
  } catch (error) {
    res.send(error);
  }

  //   new_post
  //     .save()
  //     .then((result) => {
  //       res.send(result);
  //     })
  //     .catch((error) => {
  //       res.send(error);
  //     });

  //   res.send('<h1>Welcome to the Homepage</h1>');
});
