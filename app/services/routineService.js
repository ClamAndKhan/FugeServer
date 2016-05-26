var Routines = require('../models/routineModel.js');

var RoutineService = {

	findAll: function (callback) {
		Routines.find(function(err, routines) {
		  callback(err, routines)
		});
	}

}

module.exports = RoutineService