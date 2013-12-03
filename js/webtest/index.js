var http = require('http'),
    url  = require('url'),
    text1kb = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Lorem ipsum dolor sit amet ",
    host = '127.0.0.1',
    port = '8600';


http.createServer(function (req, res) {
    var url_parts = url.parse(req.url, true),
        length = parseInt(url_parts.href.match(/[0-9]+/g)) || parseInt(Math.random()*10)+1;

    // limit to 1GB :)
    if (length > 1024*1024)  length = 1024*1024;
    res.writeHead(200, {'Content-Type': 'text/plain'});

    for(var i = 1; i <= length; i++) {
        res.write(text1kb);
    }
    res.end('\n');

}).listen(port, host);


console.log('Server running at http://'+host+':'+port+'/');
