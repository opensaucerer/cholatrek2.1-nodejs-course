// importing the http module
const http = require('http');

// registering the server event
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('This is the Homepage');
    res.end();
  } else if (req.url === '/about') {
    res.write('This is the About Page');
    res.end();
  } else if (req.url === '/contact') {
    res.write('This is the Contact Page');
    res.end();
  } else {
    res.write(`
    <h1>Oops! We couldn't find that page</h1>
    <p><a href="/">Go Home</a></p>
      `);
    res.end();
  }

  //   console.log('Server was accessed');
});

// listening for the server event
server.listen(5000);
