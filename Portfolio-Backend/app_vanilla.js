// Non express way of creating a server
const http = require('http');

// Creates the server for read/write
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('8080 Works');
}).listen(8080);