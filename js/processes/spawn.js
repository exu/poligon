var spawn = require('child_process').spawn,
    ls    = spawn('watch', ['-n 1', '/home/exu/tmp']);

ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

ls.on('exit', function (code) {
  console.log('child process exited with code ' + code);
});




var growl = require('growl')
growl('You have mail!')
growl('5 new messages', { sticky: true })
