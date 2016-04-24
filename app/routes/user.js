var UserCtrl = require('../controllers/userController.js');
var mdw = require('./middleware/middleware.js');

module.exports = function(app,router) {
  //////////////////////////////////////////////
  //TODO: Add Route parameter validations
  //////////////////////////////////////////////

  router.route('/users/create')
  	.post(UserCtrl.create)

  router.route('/users/login') 
  	.post(UserCtrl.login)

  // router.route('/user/search/:name')          
  // 	.get(UserCtrl.findByName)

  router.route('/users')
  	.get(mdw.authenticate, UserCtrl.findAll)

  // router.route('/user/address')
  // 	.post(UserCtrl.createAddress)
  // 	.get(mdw.authenticate, UserCtrl.getAddress)

}