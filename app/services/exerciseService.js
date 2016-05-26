var Exercises = require('../models/exerciseModel.js');

var ExerciseService = {

	findAll: function (callback) {
		Exercises.find(function(err, exercise) {
		  callback(err, exercise)
		});
	},

	findByName: function (exerciseName, callback) {
		Exercises.find({exerciseName: exerciseName}, function(err, exercise) {
		  callback(err, exercise[0])
		});
	}

}

module.exports = ExerciseService