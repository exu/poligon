process.stdout.on('resize', function() {
  console.log('screen size has changed!');
  console.log(process.stdout.columns + 'x' + process.stdout.rows);
});

setTimeout(function(){}, 12200)
