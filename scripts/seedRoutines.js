var Routine 	= require('../app/models/routineModel.js');
var Workout 	= require('../app/models/workoutModel.js');
var Exercise 	= require('../app/models/exerciseModel.js');
var config		= require('../config.js');
var mongoose 	= require("mongoose");
var async		= require('async');
require('../constant.js')

mongoose.connect(config.database);

var routines 	= require('../app/models/seed_JSON/routines.js');
var workouts 	= require('../app/models/seed_JSON/workouts.js');
var exercises 	= require('../app/models/seed_JSON/exercises.js');

async.each(routines, createRoutine, function (err, results) {
	if(err){
		console.log(err);
		process.exit(1);
	}
	console.log('Routines added!')
})

async.each(workouts, createWorkout, function (err, results) {
	if(err){
		console.log(err);
		process.exit(1);
	}
	console.log('Workouts added!')
})

async.each(exercises, createExercise, function (err, results) {
	if(err){
		console.log(err);
		process.exit(1);
	}
	console.log('Exercises added!')
	process.exit(0);
})

// HELPERS //
function createRoutine (routine, callback){
	var model = new Routine(routine)
	model.save(function(err, newRoutine) {
		if(err){
			callback(err)
		}
		console.log(newRoutine.routineName,': Routine created sucessfully');
		callback(null, true);
	})
}

function createWorkout (workout, callback){
	var model = new Workout(workout)
	model.save(function(err, newWorkout) {
		if(err){
			callback(err)
		}
		console.log(newWorkout.workoutName,': Routine created sucessfully');
		callback(null, true);
	})
}

function createExercise (exercise, callback){
	var model = new Exercise(exercise)
	model.save(function(err, newExercise) {
		if(err){
			callback(err)
		}
		console.log(newExercise.exerciseName,': Exercise created sucessfully');
		callback(null, true);
	})
}