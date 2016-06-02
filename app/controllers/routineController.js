var RoutineService = require('../services/routineService.js')

var RoutineController = {

	getAllRoutineData: function(req, res, next) {
		RoutineService.createFullRoutineJSON(function (err, routines) {
			if(err){
				console.log('error ',err);
				res.send(err);
			}
			res.send(routines)
		})
	
	},

};


module.exports = RoutineController