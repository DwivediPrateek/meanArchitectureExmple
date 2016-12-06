'use strict'

var cluster = require('cluster')
var deferred = require('q').defer()
var debug = require('debug')('cluster')


// Code to run if we're in the master process or if we are not in debug mode/ running tests

if ((cluster.isMaster) ) {  

	debug(`Cluster is Master`);
  // Count the machine's CPUs
  var cpuCount = require('os').cpus().length

  // Create a worker for each CPU
  for (var i = 0; i < cpuCount; i += 1) {
  	debug(`forking ${i}`)
  	cluster.fork()
  }

  // Listen for dying workers
  cluster.on('exit', function (worker) {
    // Replace the dead worker, we're not sentimental
    debug(`Worker ${worker.id} died :(`)
    cluster.fork();
})

}
else 
{

	var express=require('express');
	var bodyParser     = require('body-parser');

	var app=express();


	var methodOverride = require('method-override');


	var port = 8080;


	app.use(bodyParser.json()); 


	app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 


	app.use(bodyParser.urlencoded({ extended: true })); 


	app.use(methodOverride('X-HTTP-Method-Override')); 

	app.use(express.static(__dirname + './node_modules/*')); 
	var routes=require('./packages/server/routes/routes.js');

	var userController=require('./packages/server/controllers/userCtrl/userController.js');
	var phoneController=require('./packages/server/controllers/phoneCtrl/phoneController.js');

	app.use(express.static(__dirname + '/packages/client')); 

	app.use(express.static(__dirname + '/packages/client/assets/*'));

	app.post(routes.createUserProfile,userController.createUserProfileCtrl);

	app.post(routes.createNewPhone,phoneController.createNewPhone);

	app.get(routes.getPhoneList,phoneController.getPhoneList);

	app.listen(port);               

}
