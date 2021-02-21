var express=require('express'); //importing express
var app=express();// initializing express

app.set('port',3000); // creating application variable key value pair 
/*
app.get("/",function(req,res){// listening the request after running this if we type <server_name>:3000 we get log in console the below msg
    console.log("Welcome to Home Page");
    res.status(404);// to set status of the response while sending response
    res.send("This is respose");// this method is use to send the response
*/

/*
//sending json data
app.get("/json",function(req,res){// listening the request after running this if we type <server_name>:3000 we get log in console the below msg
    console.log("Welcome to Home Page");
    res.status(200);// to set status of the response while sending response
    res.json({
        "jsondata": true
    });// this method is use to send the json response
});
*/
var path=require('path'); //importing path module to get file from path

/*
app.get("/file",function(req,res){// listening the request after running this if we type <server_name>:3000 we get log in console the below msg
    console.log("Welcome to Home Page");
    res.status(200);// to set status of the response while sending response
    res.sendFile(path.join(__dirname,'index.js'));// this method is use to send file response : __dirname will return the folder where this file i.e 'index.js' is stored and second parameter is file name that should in same folder of that of 'index.js'
});
*/


app.get("/file",function(req,res){// listening the request after running this if we type <server_name>:3000 we get log in console the below msg
    console.log("Welcome to Home Page");
    res.status(200);// to set status of the response while sending response
    res.sendFile(path.join(__dirname,'public','index.html'));// this method is use to send file response : __dirname will return the folder where this file i.e 'index.js' is stored and second parameter is folder and third is file name inside folder specified in second parameter
});


var server= app.listen(app.get('port'),function(){ // create object returned by app.listen
    console.log("Listening to port "+server.address().port);// using object to get port which we are listening to
});