var http = require('http');
var server = http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('NodeJs App');
});
server.listen(6060);
console.log('Server is running at http://localhost:6060/');
