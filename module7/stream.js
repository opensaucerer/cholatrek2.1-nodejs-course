// Stream in NodeJS
const { writeFileSync, readFileSync, createReadStream } = require('fs');

// stream reads data in 64kb

// reading file in chunk using stream
const stream = createReadStream('./big.txt', 'utf8', {
  highWaterMark: 90000,
});

// listening for data stream
stream.on('data', (result) => {
  console.log(result + '\n\n\n');
});

stream.on('error', (error) => {
  console.log('We GOT AN ERRROR');
  console.log(error);
});

// creating big file
// for (let i = 0; i < 10001; i++) {
//   writeFileSync('./big.txt', 'This is a dummy text\n', { flag: 'a' });
// }

// reading  the file in full
// data = readFileSync('./big.txt', 'utf8');

// console.log(data);
