var User = require('../models/userModel.js');
// var jwt  = require('../components/auth.js').jwt;
var jwt = require('jsonwebtoken')
var config = require.main.require('./config.js')
var _ = require('underscore-node')

var UserService = {

	findAll: function (callback) {
		User.find(function(err, users) {
		  callback(err, {success: true, data: users})
		});
	},

	login: function (loginData, callback) {
		console.log('login service')
		//Check if user has an account
		User.find({email: loginData.email}, function (err, mUser) {
			var mUser = mUser[0];
			console.log('mUser found', mUser)
			if(!mUser) {
				console.log('email account does not exist')
				callback(err, {success: false, data: 'email account does not exist'})
			} else {
				//If user password is incorrect
				if(!(mUser.password == loginData.password)) {
					console.log('incorrect password')
					callback(err, {success: false, data: 'username or password incorrect'})
				} else {
					//If their password is correct
					//create token
					var token = jwt.sign(mUser._id, config.secret+mUser._id, {
			          expiresIn: (60*60*2) // expires in 2 hours
			        });
			        callback(err, {success: true, data: mUser, token: token})
				}
			}
		})

	},

	create: function (newUser, callback) {
		User.find({email: newUser.email}, function (err, user) {
			if (err){
				console.log(err);
				callback(err);	
			} 
			var user = user[0];
			if(user){
				callback(err, {success: false, data: 'email already exists'})
			} else {
				var user = new User(newUser)

				user.save( function(err, mUser) {
					if (err) console.log(err);
					console.log('User saved successfully')

					//create token
					var token = jwt.sign(user._id, config.secret+mUser._id, {
			          expiresIn: (60*2) // expires in 24 hours
			        });

					callback(err, {success: true, data: {userId:mUser._id}, token: token})
				})
			}
		})
	},

	updateInfo: function(deviceId, userInfo, callback) {
		User.find({deviceId:deviceId}, function(err, result){
			if(err){
				console.log(err);
				callback(err)
			}
			mUser = result[0];
			console.log('results ',result)
			mUser.gender = userInfo.gender;
			mUser.age = userInfo.age;
			mUser.skillLevel = userInfo.skillLevel;
			mUser.bodyweight = userInfo.bodyweight;

			mUser.save(function(err, result) {
				if(err) console.log(err);
				callback(err, {success: true, data: result})
			})
		})
	}


}

module.exports = UserService