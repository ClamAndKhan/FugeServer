var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var WorkoutSchema   = new Schema({
    workoutName: { type: String, required: true },
    muscleGroups: {type:[String]},
    exercises: [{
    	exerciseName: { type: String, required: true },
    	percentOfMax: {type: Number, required: true},
    	sets: {type: []}
    }]
});

module.exports = mongoose.model('Workouts', WorkoutSchema);