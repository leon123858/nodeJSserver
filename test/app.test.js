var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send("你好 express");
})

app.listen(8080,'127.0.0.1');
