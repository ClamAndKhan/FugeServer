var User = require('../models/userModel.js');
// var jwt  = require('../components/auth.js').jwt;
var jwt = require('jsonwebtoken')
var config = require.main.require('./config.js')

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
			          expiresIn: (60*2) // expires in 24 hours
			        });
			        callback(err, {success: true, data: mUser, token: token})
				}
			}
		})

	},

	create: function (newUser, callback) {
		
		User.find({email: newUser.email}, function (err, user) {
			if (err) console.log(err);
			var user = user[0];
			if(user){
				callback(err, {success: false, data: 'email account already exists'})
			} else {
				var user = new User(newUser)

				user.save( function(err, mUser) {
					if (err) console.log(err);
					console.log('User saved successfully')

					//create token
					var token = jwt.sign(user._id, config.secret+mUser._id, {
			          expiresIn: (60*2) // expires in 24 hours
			        });

					callback(err, {success: true, data: mUser, token: token})
				})
			}
		})
	},


}

module.exports = UserService