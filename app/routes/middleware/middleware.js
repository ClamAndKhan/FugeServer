var Validation  = require('./validation.js')
var config      = require.main.require('./config.js')
var jwt         = require('jsonwebtoken');
var _           = require('underscore-node')

var _routeValidations = {};

var middleware = {
  authenticate: function (req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    var userId = req.headers.id
    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, config.secret+userId, function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;    
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      });
      
    }
  },

  validate: function (routeName) {
    return function(req, res, next) {
      console.log('validating!')
      var body = req.body;
      var validated = _validateRequest(routeName, body)
      console.log('validated:',validated)
      if (!validated.success) {
        res.status(400).json({
          success: false,
          message: validated.message
        })
      }
      else next();
    }
  }
}

function _validateRequest (routeName, body) {
  var params =  Validation[routeName];
  var result = {success:true}
  console.log(body)
  _.each(params, function(value, key) {
    // If required param is missing
    if( value.required && !body[key] ) {
      return result = {success:false, message: 'request is missing required field: ' + key};
    } else {

      // If param type is wrong
      if( value.type !== typeof(body[key]) ) {
        return result = {success:false, message: key+' field must be a '+value.type};
      }

    }

  })
  console.log('this shouldnt be seen')
  return result;

}

module.exports = middleware
