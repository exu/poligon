var _ = require('underscore');

var o = {
    a:2,
    b:3
}




_(o).each(function (k,v){
  console.log(k,v);
});