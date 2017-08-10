var express = require('express');
var bodyParser = require('body-parser');
var tinyURL = require('tinyurl');
var cors = require('cors');
var path = require("path");
var app = express();

app.use(express.static("."));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile("./index.html").status(200);
});

app.post('/',(req,res)=>{
    url = encodeURI(req.body.reqURL||req.headers.reqURL||req.query.reqURL);
    tinyURL.shorten(url,(shortURL)=>{
        res.send(shortURL).status(200);
    });
});

app.use(cors);
app.listen(8080,function(){
    console.log('Express app listening on port 8080');
});