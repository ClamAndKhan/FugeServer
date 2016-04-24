var bodyParser = require('body-parser');
var morgan = require('morgan')

// Middleware for our API
module.exports = function(app, router, express) {
	
	//Lets us get data from POST requests
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	
	// All of our routes will be prefixed with /api
	app.use('/api', router);

	app.use(express.static('website'));

	// Use morgan to log requests to the console
	app.use(morgan('dev'));
}