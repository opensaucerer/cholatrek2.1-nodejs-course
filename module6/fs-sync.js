// fs module - file system module
const { readFileSync, writeFileSync } = require('fs');

// reading from files
// synchronous read file
const data = readFileSync('./data.txt', 'utf8');
const info = readFileSync('./info.txt', 'utf8');
console.log(data);
console.log(info);

// writing into files
// synchronous write file
writeFileSync(
  './quotes/quotes.txt',
  `QUOTE ONE:\n${data}\nQUOTE TWO:\n${info}`,
  { flag: 'a' }
);
