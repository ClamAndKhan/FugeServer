var mongoose     	= require('mongoose');
var Schema       	= mongoose.Schema;

var WorkoutLogSchema   = new Schema({
    workoutId: { type: String, required: true },
    userId: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    exerciseLog: { 
    	type: [{
    		exerciseId: {type: String, required: true},
    		sets: [{
    			reps: {type: Number, required: true},
    			weight: {type: Number, required: true},
    			startTime: { type: Date, required: true },
    			endTime: { type: Date, required: true }
    		}]
    	}], 
    	required: true 
    }
});

module.exports = mongoose.model('Workoutlogs', WorkoutLogSchema);