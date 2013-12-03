var deferred = require('deferred')

var promise = deferred({ foo: 'bar' });

promise(function (obj) {
    console.log(obj.foo); // 'bar';
  return "DUPA";
}).then(function(value) {
  console.log( value );
  return "LAMPA";
}).end(function(v) {
  console.log( v );
});
