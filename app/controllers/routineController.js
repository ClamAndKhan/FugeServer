var RoutineService = require('../services/routineService.js')
var WorkoutService = require('../services/workoutService.js')
var ExerciseService = require('../services/exerciseService.js')

var async = require('async')

var RoutineController = {

	getAllRoutineData: function(req, res, next) {
		RoutineService.findAll(function (err, routines) {
			if(err){
				console.log('error ',err);
				res.send(err);
			}
			console.log('routines', routines)

			var routines = routines;
			var results = [];

			addWorkouts(routines, results, function (results) {
				res.send(results)
			});

			function addWorkouts(routines, results, callback) {
				if(routines.length == 0) {
					return callback(results)
				}
				var routine = routines.pop().toObject();
				routine.workouts = [];
				console.log('routine', routine)

				var workoutLength = routine.workoutNames.length;
				var workoutCounter = 0;
				console.log('routine.workoutNames', routine.workoutNames)
				async.forEachOf(routine.workoutNames, function (workoutName, index) {
					WorkoutService.findByName(workoutName, function (err, workout) {
						if(workout){
							workout = workout.toObject();
							var exerciseCounter = 0;
							var exerciseLength = workout.exercises.length;
							
							async.forEachOf(workout.exercises, function (exercise, index) {
								console.log('exercise!',exercise)
								ExerciseService.findByName(exercise.exerciseName, function (err, exerciseModel) {
									exerciseModel = exerciseModel.toObject()
									console.log('exerciseModel',exerciseModel)
									exercise.data = exerciseModel;
									exerciseCounter++;
									if(exerciseCounter === exerciseLength){
										workoutCounter++
										console.log('exerciseCount',exerciseCounter)
										routine.workouts.push(workout)
										console.log('routine1', routine)
										if(workoutCounter === workoutLength){
											results.push(routine)
											console.log('routine ',routine)
											console.log('bout to switch routines')
											console.log('results',results)
											addWorkouts(routines, results, callback)
										}
									}
								} )
							})
						} else {
							workoutCounter++;
							if(workoutCounter === workoutLength){
								results.push(routine)
								console.log('counter', workoutCounter)
								console.log(results)
								addWorkouts(routines, results, callback)
							}
						}

						
					})
					
				})
			}

		})

		// Find all of the routines
			// Find all of their workouts
				// add all of the workout exercises
			// add all of the workouts to the routine
		// return all of the routines
	
	}

};

function getRoutines (callback) {
	RoutineService.findAll(function (err, routines) {
		if(err){
			console.log('error: ',err);
			res.send(err);
		}
		callback(err, routines);
	})
}

function addWorkoutsToRoutine (routine) {
	async.forEachOf
}

module.exports = RoutineController