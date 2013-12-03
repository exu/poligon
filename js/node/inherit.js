var util = require('util');

function A() {
}

A.prototype.go = function(error){
  console.log( "a" );
}

A.prototype.kk = function(error){
  console.log( "a" );
}

function B() {
}

util.inherits(B, A);

B.prototype.go = function(error){
  console.log( "b" );
}

new A().go();
new A().kk();
new B().go();
new B().kk();


asdfjskfjksdjkf