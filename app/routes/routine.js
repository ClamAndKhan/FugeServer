var RoutineCtrl = require('../controllers/routineController.js');
var mdw = require('./middleware/middleware.js');
// var mdw = require('./middleware/middleware.js');

module.exports = function(app,router) {

  router.route('/routines')
  	.post(mdw.authenticate, mdw.validate('routines_getAllRoutineData'), RoutineCtrl.getAllRoutineData)

}
  

