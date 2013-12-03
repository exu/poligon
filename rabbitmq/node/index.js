
var context = require('rabbit.js').createContext('amqp://localhost');

context.on('ready', function() {
	var sock = context.socket('PUSH');
	sock.connect('task_queue', function() {
		sock.write(JSON.stringify({
			template_id:12, 
			to: 'jacek.wysocki@edpauto.com'}), 
		'utf8');
	});
});





// var context = require('rabbit.js').createContext('amqp://localhost');
// context.on('ready', function() {
//   var pub = context.socket('PUB'), sub = context.socket('SUB');
//   sub.pipe(process.stdout);
//   sub.connect('task_queue', function() {
//     pub.connect('task_queue', function() {
//       pub.write(JSON.stringify({template_id:12, to: 'jacek.wysocki@edpauto.com'}), 'utf8');
//     });
//   });
// });