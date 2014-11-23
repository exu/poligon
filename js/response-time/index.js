var http = require('http');
var start = new Date();
var time;
var stats = {
    home: [],
    item: [],
    homeAvg: 0,
    itemAvg: 0
};

function avg(times) {
    var sum = times.reduce(function(a, b) { return a + b });
    var avg = sum / times.length;

    return avg;
}

while(true) {
    start = new Date();
    http.get({host: 'kasia.in', port: 80}, function(res) {
        time = new Date() - start;

        stats.home.push(time);
        stats.homeAvg = avg(stats.home);

        console.log('Home request took:', time, 'ms', ' average ', stats.homeAvg);
    });


    start = new Date();
    console.log(start);
    http.get('http://kasia.in/przepis/589.kurczak-z-winem-i-pieczarkami-czyli-kurczak-marsala', function(res) {
        time = new Date() - start;

        stats.item.push(time);
        stats.itemAvg = avg(stats.item)

        console.log('Item request took:', time, 'ms', ' average ', stats.itemAvg);
    });

};
