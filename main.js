var http = require('http');
http.createServer(function(req,res){
    res.write("hello welcome to this tutorial");
    res.end();
}).listen(8080);