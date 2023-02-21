var url = require('url');//in built library/module
var adr ="https://sketch.io/sketchpad/"; //var adr ="http://localhost:8080/default.htm?yer=2017&month=february";
var q = url.parse(adr,true);


console.log(q.host); //returns 'localhost:8800'
console.log(q.pathname);//returns '/default.html'
console.log(q.search); // return '?year = 2017&month= february'

var qdata=q.query; //return an object : {year: 2017, month: 'february'}
console.log(qdata.month)//returns february