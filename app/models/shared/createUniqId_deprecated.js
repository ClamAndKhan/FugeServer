//This module facilitates letting you create your own auto-incrementing unique indexes
var Counter 	 = require('../counterModel.js')

function createUniqId (schema, idName) {
	schema.pre('save', function(next) {
		var doc = this;
		Counter.findByIdAndUpdate({_id: idName}, {$inc: { seq: 1} }, function(error, counter)   {
		    if(error){
		    	console.log('errorr',error)
		        return next(error);
		    }
		    doc[idName] = counter.seq;
		    next();
		});
	})
}

module.exports = createUniqId