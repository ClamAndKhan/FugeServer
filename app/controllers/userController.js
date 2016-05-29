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
		var deviceId = req.body.deviceId;
		UserService.create(deviceId, req.body, function(err, resData) {
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

	updateInfo: function (req, res, next) {
		console.log('updateing info')
		console.log(req.body.bodyweight)
		var deviceId = req.body.deviceId
		var userInfo = {
			skillLevel: req.body.skillLevel,
			age: req.body.age,
			gender: req.body.gender,
			bodyweight: req.body.bodyweight
		}
		UserService.updateInfo(deviceId, userInfo, function(err, resData) {
			if(err){
				console.log('could not update user info', err)
				res.send(err);
			}
			res.json(resData);
		})
	}

};

module.exports = UserController