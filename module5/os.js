// The OS Module
const os = require('os');

console.log(os.userInfo());
console.log('Computer Uptime: ' + os.uptime());

// creating an object about my OS
computer = {
  uptime: os.uptime(),
  osType: os.type(),
  osRelease: os.release(),
  osFreeMem: os.freemem(),
};
console.log(computer);
