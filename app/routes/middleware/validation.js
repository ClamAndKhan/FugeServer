var CNST = require.main.require('./constant.js')

var Validation = {
	routines_getAllRoutineData: {},
	users_create: {
		email: {required: true, type: CNST.STRING},
		password: {required: true, type: CNST.STRING},
		bodyweight: {required: false, type: CNST.STRING},
		gender: {required: false, type: CNST.STRING},
		skillLevel: {required: false, type: CNST.STRING},
		age: {required: false, type: CNST.STRING}
	},
	workout_logWorkout: {
		workoutId: { required: true, type: CNST.STRING },
		userId: { required: true, type: CNST.STRING },
		startTime: { required: true, type: CNST.STRING },
		endTime: { required: true, type: CNST.STRING },
		exerciseLog: {required: true, type: CNST.STRING}
	}
}

module.exports = Validation;