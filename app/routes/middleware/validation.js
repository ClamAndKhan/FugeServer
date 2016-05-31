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
	}
}

module.exports = Validation;