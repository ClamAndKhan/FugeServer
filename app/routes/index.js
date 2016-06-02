var Routes = {}

var Users = require('./user.js')
var Routines = require('./routine.js')
var Workouts = require('./workout.js')

module.exports = function(app,router){ 
  //Adds routes to the express router
  Users(app,router);
  Routines(app,router);
  Workouts(app,router);
  
}