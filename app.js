require('./constant.js')
var express		= require('express');   
var config		= require('./config.js');
var mongoose	= require('mongoose');


var app = express(); 
var router = express.Router();

//Connect to DB
mongoose.connect(config.database);

var expressConfigs = require('./expressConfig.js')(app, router, express)
var routes = require('./app/routes/')(app, router)


var port = process.env.PORT || 8080;

// START THE SERVER

app.listen(port, function () {
	console.log('Listening on port: ' + port+ '...');
})