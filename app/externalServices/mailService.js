// var nodemailer = require('nodemailer');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('gfJeMiYndOSY06WBRjmZyw');
// var mandrill = require('node-mandrill')('gfJeMiYndOSY06WBRjmZyw');
console.log('mandrill_client: ',mandrill_client)
var config = require.main.require('./config.js');



// var transporter = nodemailer.createTransport({
// 	service: 'Gmail',
// 	auth: {
// 		user: config.email,
// 		pass: config.password
// 	}
// })

module.exports = {
	sendEmail: function (email,cb) {
		var async = false;
		var ip_pool = "Main Pool";
		var send_at = new Date().toISOString();

		var template_name = "Fuge Beta Signup";
		var template_content = [{
		        "name": "example name",
		        "content": "example content"
		    }];
		var message = {
		    // "html": "<p>Example HTML content</p>",
		    // "text": "Example text content",
		    "subject": "Welcome to Trophe Beta!",
		    "from_email": "mike@tropheapp.com",
		    "from_name": "Mike",
		    "to": [{
		            "email": email,
		            "type": "to"
		        }],
		    "headers": {
		        "Reply-To": "mike@tropheapp.com"
		    },
		    "track_opens": true
		}
		mandrill_client.messages.sendTemplate({"template_name": template_name, "template_content": template_content, "message": message, "async": async, "ip_pool": ip_pool, "send_at": send_at}, function(result) {
		    console.log(result);
		    cb(null,result)
		}, function(e) {
		    // Mandrill returns the error as an object with name and message keys
		    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
		    // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
			cb(e,null);
		});
	}
}