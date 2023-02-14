var http = require('http');//importing the inbuilt http module
var dt = require('./ownModule.js');//calling one module from another/user default
//dt: todays date

http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write("The data and time are currently: "+dt.getCurrentDate());
    res.end();
}).listen(8800);