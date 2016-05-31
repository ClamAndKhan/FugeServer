var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
	email: String,
	password: String,
    bodyweight: String, 
    gender: String,
    skillLevel: String, 
    age: String
});

module.exports = mongoose.model('Users', UserSchema);