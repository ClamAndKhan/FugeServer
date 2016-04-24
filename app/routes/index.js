var Routes = {}

var Users = require('./user.js')

module.exports = function(app,router){ 
  //Adds routes to the express router
  Users(app,router);
}