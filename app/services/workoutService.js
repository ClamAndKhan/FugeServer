var Workouts = require('../models/workoutModel.js');

var WorkoutService = {

	findAll: function (callback) {
		Workouts.find(function(err, workouts) {
		  callback(err, workouts)
		});
	},

	findByName: function (workoutName, callback) {
		Workouts.find({workoutName: workoutName}, function(err, workout) {
		  callback(err, workout[0])
		});
	}

}

module.exports = WorkoutService