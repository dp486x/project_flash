var mongoose = require('mongoose'),
errorHandler = require('./errors.controller'),
request = require('request'),
_ = require('lodash'),
chalk = require('chalk');

//jobs controller - logic behind each routes.

exports.list = function(req, res){
  //get all jobs
  console.log("jobs:list");
};

exports.create = function(req, res){
  //create new job
  console.log("jobs:create");
};

exports.read = function(req, res){
  //get one job (preferrrably by ID)
  console.log("jobs:read. Parameter: " + req.params.jobID);
};

exports.update = function(req, res){
  //update the job - by ID
  console.log("jobs:update. Parameter: " + req.params.jobID);
};

exports.delete = function(req, res){
  //delete the job
  console.log("jobs:delete. Parameter: " + req.params.jobID);
};


exports.jobsMiddleware = function(req, res, next){
  //jobs middleware
  console.log(chalk.yellow("Something that executes when there's a JobID in path"));

  next();
};
