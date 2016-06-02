var WorkoutLogCtrl = require('../controllers/workoutLogController.js');
var mdw = require('./middleware/middleware.js');
// var mdw = require('./middleware/middleware.js');

module.exports = function(app,router) {

  router.route('/workout/log')
  	.post(mdw.authenticate, mdw.validate('workout_logWorkout'), WorkoutLogCtrl.logWorkout)

}