var RoutineCtrl = require('../controllers/routineController.js');
// var mdw = require('./middleware/middleware.js');

module.exports = function(app,router) {
  //////////////////////////////////////////////
  //TODO: Add Route parameter validations
  //////////////////////////////////////////////

  router.route('/routines')
  	.post(RoutineCtrl.getAllRoutineData)

}

  //POST /routines ...gets all routines
  //POST /routines/<routineId> ...gets a single routine
  //POST /exercise/log/

