var mongoose = require('mongoose'),
errorHandler = require('./errors.controller'),
request = require('request'),
_ = require('lodash'),
chalk = require('chalk');


//trailers controller - logic behind each routes.

exports.list = function(req, res){
  //get all trailers
  console.log("trailer:list");
};

exports.create = function(req, res){
  //create new trailer
  console.log("trailer:create");
};

exports.read = function(req, res){
  //get one trailer (preferrrably by ID)
  console.log("trailers:read. Parameter: " + req.params.trailerID);
};

exports.update = function(req, res){
  //update the trailer - by ID
  console.log("trailers:update. Parameter: " + req.params.trailerID);
};

exports.trailerMiddleware = function(req, res, next){
  //jobs middleware
  console.log(chalk.yellow("Something that executes when there's a trailerID in path"));

  next();
};
