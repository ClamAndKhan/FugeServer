var nodemailer = require('nodemailer');
var config = require.main.require('./config.js');

var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: config.email,
		pass: config.password
	}
})

module.exports = {
	sendEmail: function (emailTemplate, subject, recipientEmail, cb) {
		var mailOptions = {
			from: config.email,
			to: recipientEmail,
			subject: subject,
			html: emailTemplate
		};

		transporter.sendMail(mailOptions, function(error, info){
			if(error){
				console.log(error);
				cb(error)
			} else {
				console.log('email sent: '+info.response);
				cb(error, info.response);
			}
		})
	}
}