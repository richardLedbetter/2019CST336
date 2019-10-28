
var express = require("express")
var app = express()
var num = Math.random();
app.use('/',function(req,res,next){//may need to use .get instead
    req.rand = num;
    next();
    
})
app.use('/',function(req,res,next){//may need to use .get instead
    res.send('<h1>hello world'+req.rand+'</h1>')
})

var port = 8080;
console.log("listening on port ",port );
app.listen(port)