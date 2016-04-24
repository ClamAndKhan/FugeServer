var UserService = require('../services/userService.js')

var UserController = {

	findAll: function(req, res, next) {
		UserService.findAll(function(err, resData){
			if(err){
				console.log('error!', err)
				res.send(err);
			}
			res.json(resData)
		})
	},

	create: function(req, res, next) {
		console.log('req.body',req.body)
		UserService.create(req.body, function(err, resData) {
			if(err){
				console.log('could not create user', err)
				res.send(err);
			}
			res.json(resData)
		})
	},

	login: function (req, res, next) {
		UserService.login(req.body, function(err, resData) {
			if(err){
				console.log('could not login user', err)
				res.send(err);
			}
			res.json(resData)
		})

	},

	createAddress: function (req, res, next) {
		var userId = req.headers.userid
		var authToken = req.headers.authorization

		UserService.createAddress(userId, authToken, req.body, function (err, addressInfo) {
			if(err){
				console.log('could not create new address', err)
				res.send(err);
			}
			res.json(addressInfo)
		})
	},

};

module.exports = UserController