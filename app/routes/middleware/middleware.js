var config = require.main.require('./config.js')
// var jwt = require('../../components/auth.js').jwt
var jwt = require('jsonwebtoken');

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
  }
}

module.exports = middleware
