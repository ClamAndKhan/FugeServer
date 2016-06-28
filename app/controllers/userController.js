var UserService = require('../services/userService.js')
var MailService = require('../externalServices/mailService.js')
var path = require('path');

console.log(MailService)
var fs = require('fs')

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

	sendBetaEmail: function (req, res, next) {
		console.log('heyyo')
		console.log('req.body',req.body)
		MailService.sendEmail(req.body.email,function(err,response) {
			if(err){
				console.log('error!', err);
				res.send(err);
			}
			res.json(response);
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