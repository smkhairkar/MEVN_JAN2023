var fs = require('fs'); //import statement, we did not import event. (in built)
//it imports the filestream from the node modules
//fs=filestream is an inbuilt module
var rs=fs.createReadStream('demo.txt');
//event=action performed on an action 
rs.on('open',function(stream){
    console.log('The file is open')
})