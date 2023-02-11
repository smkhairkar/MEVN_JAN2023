var http = require('http');
var dt =require('./ownModule.js');
var m2= require('./main1.js');

http.createServer(function(req,res){
    
    //res: response to a request(req)
    //response has 3 feature: head/body and Tail
    //Head: code indicating success or failure or any other status
    //200:success code,format: text/html,json.xml....
    res.writeHead(200,{'Context-Type':'text/html'});
    

    //update the body of the response: data coming from a different user created module
    res.write("The data and time are currently : " +dt.getCurrentDate());
    // res.write("\nTime are currently :" +dt.getCurrentTime());
    //date time is being fetched from the outside module
    //using the content type mentioned above as text/html user defined module
    res.write("\nProgram running on port number 8002");

    res.end();//ending the write functionality for a request response function
}).listen(8002);//mentioning which port our application will run on the server