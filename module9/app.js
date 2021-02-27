const http = require('http');
const { readFileSync } = require('fs');

// reading basic html file
// const homepage = readFileSync('./module9/index.html');

// reading files in our navbar app
const homePage = readFileSync('./module9/navbar_app/index.html');
const pageStyle = readFileSync('./module9/navbar_app/main.css');
const pageNormalize = readFileSync('./module9/navbar_app/normalize.css');
const pageScript = readFileSync('./module9/navbar_app/navbar.js');

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  } else if (req.url === '/normalize.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(pageNormalize);
    res.end();
  } else if (req.url === '/main.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(pageStyle);
    res.end();
  } else if (req.url === '/navbar.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(pageScript);
    res.end();
  } else {
    res.writeHead(400, { 'content-type': 'text/plain' });
    res.write("We couldn't find that page");
    res.end();
  }
});

server.listen(8000);
