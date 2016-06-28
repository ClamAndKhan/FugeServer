var Routine 	= require('../app/models/routineModel.js');
var Workout 	= require('../app/models/workoutModel.js');
var Exercise 	= require('../app/models/exerciseModel.js');
var config		= require('../config.js');
var mongoose 	= require("mongoose");
var async		= require('async');
var vibrant		= require('node-vibrant');
var parse		= require('parse-color');
var _			= require('underscore');

require('../constant.js')

mongoose.connect(config.database);

var routines 	= require('../app/models/seed_JSON/routines.js');
var workouts 	= require('../app/models/seed_JSON/workouts.js');
var exercises 	= require('../app/models/seed_JSON/exercises.js');

deleteCollections(['routines','workouts','exercises'], function () {
	console.log('Collections deleted!')
	async.parallel([
		function(callback){
			async.each(routines,createRoutine,function(){
				callback()	
			})
		},
		function(callback){
			async.each(workouts,createWorkout, function(){
				callback()
			})
		},
		function(callback){
			async.each(exercises,createExercise, function(){
				callback()
			})
		}
	], function () {
		console.log('Database seeded successfully!')
		process.exit(1)
	})
})


//HELPERS //
function deleteCollections(collectionNames, callback){
	mongoose.connection.on('open', function(){
		async.each(collectionNames, deleteCollection, function(){
			callback()
		})
	})
}

function deleteCollection (collectionName, callback) {
	mongoose.connection.db.listCollections({name: collectionName})
	    .next(function(err, collExists) {
	        if (collExists) {
	            // Delete collection
				mongoose.connection.db.dropCollection(collectionName, function(err, result) {
					if(err){
						console.log('error',err);
						process.exit(0);
					}
					console.log('deleted '+collectionName+' collection...')
					callback()
				});
	        } else {
	        	callback();
	        }
    	});

}

function createRoutine (routine, callback){
	addColorData(routine, function saveExercise(routineWithColorData) {
		var model = new Routine(routineWithColorData)
		model.save(function(err, newRoutine) {
			if(err){
				console.log('could not save routine: ',err)
				process.exit(0)
			}
			console.log(newRoutine.routineName,': Routine created sucessfully');
			callback(null, true);
		})
	})
}

function createWorkout (workout, callback){
	var model = new Workout(workout)
	model.save(function(err, newWorkout) {
		if(err){
			console.log('Could not add Workout: ',model)
			console.log(err)
			process.exit(0)
		}
		console.log(newWorkout.workoutName,': Workout created sucessfully');
		callback(null, true);
	})
}

function createExercise (exercise, callback){
	addColorData(exercise, function saveExercise(exerciseWithColorData) {
		var model = new Exercise(exerciseWithColorData)
		model.save(function(err, newExercise) {
			if(err){
				console.log('could not add workout: ',model)
				console.log(err)
				process.exit(0)
			}
			console.log(newExercise.exerciseName,': Exercise created sucessfully');
			callback(null, true);
		})
	})
}

function addColorData (obj, cb) {
	vibrant.from(obj.picUrl).getPalette(function(err, res) {
		if(err){
			console.log('error ',err)
			console.log('could not add workout: ',model)
			console.log(err)
			process.exit(0)
		}
		//Add the hue and hex
		var colorData = {};
		_.each(res,function(colorType, key){
			if(colorType){
				var parsedColorData = parse('hsl('+Math.round(colorType.hsl[0]*360)+','+Math.round(colorType.hsl[0]*360)+','+Math.round(colorType.hsl[0]*360)+')')
				colorData[key] = {
					hex: parsedColorData.hex,
					hue: parsedColorData.hsl[0]
				}
			}
		})
		console.log('colorData: ',colorData)
		obj.colorData = colorData;
		cb(obj)
	})
}