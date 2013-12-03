fs = require('fs');

fs.watch('/home/exu/tmp', function(event, filename){
  console.log('event ' + event);
  console.log('filename ' + filename);
});