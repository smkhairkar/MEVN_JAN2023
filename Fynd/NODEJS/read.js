const fs = require("fs");//no change in this

//file is the parameter
function readUTF8(filepath)
{
    //callback=choice determinig
    //success=data
    //error=failure
    //minimise exception handling
    fs.readFile(filePath, "utf-8", (data, error) => {
        if(error){
            console.error(error);
            return;
        }
        console.log(data);
    });
}

//non existing file
readUTF8file("./abcd.txt");

//Existing file
readUTF8file("");
readUTF8file("");

//File with different encoding. will read with missing characters.