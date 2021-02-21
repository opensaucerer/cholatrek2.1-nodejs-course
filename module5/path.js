// the PATH module
const path = require('path');

console.log(path.sep);

newPath = path.join('\\content\\', 'myfile.js', __dirname);

console.log(newPath);

console.log(path.basename(newPath));

secPath = path.resolve('content', 'myfile.js', __dirname);

console.log(secPath);
