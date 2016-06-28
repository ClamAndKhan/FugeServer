var UserCtrl = require('../controllers/userController.js');
var mdw = require('./middleware/middleware.js');

module.exports = function(app,router) {
  //////////////////////////////////////////////
  //TODO: Add Route parameter validations
  //////////////////////////////////////////////

  router.route('/users/create')
  	.post(
      mdw.validate('users_create'), 
      UserCtrl.create)

  router.route('/users/updateInfo')
    .post(UserCtrl.updateInfo)

  router.route('/users/login') 
  	.post(UserCtrl.login)

  router.route('/users/email/beta')
    .post(UserCtrl.sendBetaEmail)

}