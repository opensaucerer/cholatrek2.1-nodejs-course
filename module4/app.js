sum = 2 + 3;

console.log(sum);

console.log('This is my first nodejs code');

// window and global

// all these will not work in nodejs
// document.getElementById();
// console.log(window.location);
// console.log(window);

// WINDOW in BROWSER
// GLOBAL in NODEJS
console.log(global);

// SET TIME OUT
global.setTimeout(() => {
  console.log('This is fire after 2 seconds');
}, 2000);

// SET INTERVAL
setInterval(() => {
  console.log('This is a setInterval function');
}, 3000);

// EVENT LOOP
