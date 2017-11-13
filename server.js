var express = require('express');
var chalk = require('chalk');
var mongoose = require('mongoose');
var request = require('request');

var app = express();
var router = express.Router();

var port = process.env.PORT || 8000;
app.use(express.static(__dirname + '/'));

//import routes
require('./app/routes/routes')(app, router);

app.listen(port);
console.log("Server started at: " + port);


var hostname = 'localhost';
mongoose.connect('mongodb://'+ hostname +':27017/smartBuy').then(
  () => { console.log('connected to mongoDB at '+ hostname +':27017') },
  err => { console.log('failed connection') }
);

app.get('/',function(req, res){
  res.sendfile('./public/index.html')
});
