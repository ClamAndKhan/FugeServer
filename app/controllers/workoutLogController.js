var WorkoutLogService = require('../services/workoutLogService.js')

var WorkoutLogController = {

	logWorkout: function (req, res, next) {
		console.log('body:',req.body)
		req.body.exerciseLog = JSON.parse(req.body.exerciseLog)
		var workoutLog = req.body;
		WorkoutLogService.logWorkout(workoutLog, function (err, result) {
			if(err){
				console.log('error ',err);
				res.send(err);
			}
			res.send(result);
		})
	}

};


module.exports = WorkoutLogController


