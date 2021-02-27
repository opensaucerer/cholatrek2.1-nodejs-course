const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static(path.join(__dirname, '/navbar_app/public')));
app.use(express.static('./module10/navbar_app/public'));

app.get('/', (req, res) => {
  //   res.sendFile(__dirname + '/navbar_app/index.html');
});

app.get('/about', (req, res) => {
  res.send('<h1>This is the about page</h1>');
});

// handling basic errors
app.all('*', (req, res) => {
  res
    .status(404)
    .send('<h1>That page does not exist</h1> <br /> <a href="/">Go home</a>');
});

app.listen(5000, () => {
  console.log('Sever is listening at port 5000...');
});

// Common methods in Express
// app.get
// app.post
// app.put
// app.delete
// app.patch

// this is just exclusive to express
// app.all

// allows us to make use of middlewares in expresss
// app.use
