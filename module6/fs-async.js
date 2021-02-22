// fs module - file system module
const { readFile, writeFile } = require('fs');

// asynchronous read and write file
readFile('./data.txt', 'utf8', (err, result) => {
  if (err) {
    return console.log(err);
  }

  const data = result;

  readFile('./info.txt', 'utf8', (err, result) => {
    if (err) {
      return console.log(err);
    }
    const info = result;

    writeFile(
      './quotes/async_quote.txt',
      `QUOTE ONE:\n${data}\nQUOTE TWO:\n${info}`,
      { flag: 'a' },
      (err, result) => {
        if (err) {
          console.log(err);
        }
        return;
      }
    );
  });
});
