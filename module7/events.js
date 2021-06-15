// Events and Event Loop
const { EventEmitter } = require('events');

const myEvent = new EventEmitter();

// then you listen for it
myEvent.on('send data', (data) => {
  console.log(data.name);
  console.log(data.job);
});

// you emit event
myEvent.emit('send data', {
  name: 'Perfection',
  job: 'Software Engineer',
});
