var mee = require('multicast-eventemitter');

var emitter = mee.getEmitter();

// subscribe to eventA events
emitter.on('eventA', function(text, time) {
  console.log('eventA received...', 'text:', text, 'time:', time);
});