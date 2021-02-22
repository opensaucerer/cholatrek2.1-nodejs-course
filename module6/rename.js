// fs module - file system module
const fs = require('fs');

// sychronous file rename
fs.renameSync('./app.js', './new_app.js');

// asynchronous file rename
fs.rename('./app.js', './new_app.js', (err, result) => {
  if (err) {
    return console.log(err);
  }
  return;
});
