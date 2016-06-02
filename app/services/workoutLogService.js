var WorkoutLog = require('../models/workoutLogModel.js');

var WorkoutLogService = {

	logWorkout: function (workoutLog, callback) {
		// Add workoutLog to database
		var workoutLog = new WorkoutLog(workoutLog);
		workoutLog.save(function(err, wlModel){
			if(err){
				console.log('error: ',err)
			}
			callback(err, {success: true, data: wlModel})
		})
	}

}

module.exports = WorkoutLogService