const express = require('express');
const path = require('path');
const ejs = require('ejs');

// creating the app
const app = express();

// setting up the view engine
app.set('view engine', 'ejs');

// setting the middleware for static files
// app.use(express.static(__dirname));

// homepage
app.get('/', (req, res) => {
  let adjective = ['Brilliant', 'Nice', 'Awesome', 'Amazing'];
  let blog = [
    {
      title: 'This is blog one',
      author: 'Samperfect',
      content:
        'Welcome to EJS. You can see how amazing it is to create markups with EJS.',
    },
    {
      title: 'This is blog two',
      author: 'Perfection',
      content:
        'I hope you have been enjoying the course so far. I hope you get to learn a lot after this.',
    },
    {
      title: 'This is blog three',
      author: 'Cholatrek',
      content:
        'The Cholatrek training was designed to help you grow as a tech enthusiast.',
    },

    {
      title: 'This is blog four',
      author: 'Travella',
      content: 'We are bulding a new way to send packages across distances.',
    },
  ];
  res.render('home', {
    adjective: adjective,
    blog: blog,
  });
});

// about page
app.get('/about', (req, res) => {
  res.render('about');
});

// 404 page
app.all('*', (req, res) => {
  res.send('<h1>That page does not exits. </h1><a href="/">Go Home</a>');
});

// listening for server request
app.listen(8080, () => {
  console.log('LISTENING AT PORT 8080...');
});
