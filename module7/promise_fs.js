// Promise-based FS
const { readFile, writeFile } = require('fs').promises;
// const util = require('util');

// const getData = util.promisify(readFile);
// const writeData = util.promisify(writeFile);

logData = async () => {
  const data = await readFile('./data.txt', 'utf8');
  const info = await readFile('./info.txt', 'utf8');

  await writeFile('./quotes/promise_quote.txt', `${data}\n\n${info}`);

  console.log(data);
  console.log(info);
};

logData();

// creating a promise to read file in async
// const getData = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (error, result) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };
