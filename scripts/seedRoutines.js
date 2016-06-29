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
				colorData[key] = {
					hex: vibrant.Util.rgbToHex(colorType.rgb[0],colorType.rgb[1],colorType.rgb[2]),
					hue: rgb2hsv(colorType.rgb[0],colorType.rgb[1],colorType.rgb[2]).h
				}
			}
		})
		console.log(colorData)
		obj.colorData = colorData;
		cb(obj)
	})
}

function rgb2hsv () {
    var rr, gg, bb,
        r = arguments[0] / 255,
        g = arguments[1] / 255,
        b = arguments[2] / 255,
        h, s,
        v = Math.max(r, g, b),
        diff = v - Math.min(r, g, b),
        diffc = function(c){
            return (v - c) / 6 / diff + 1 / 2;
        };

    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(r);
        gg = diffc(g);
        bb = diffc(b);

        if (r === v) {
            h = bb - gg;
        }else if (g === v) {
            h = (1 / 3) + rr - bb;
        }else if (b === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        v: Math.round(v * 100)
    };
}