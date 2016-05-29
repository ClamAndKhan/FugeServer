var mongoose     	= require('mongoose');
var Schema       	= mongoose.Schema;

var RoutineSchema   = new Schema({
    routineName: { type: String, required: true },
    routineType: {type: String},
    difficulty: { type: String, required: true },
    numberOfWorkouts: { type: Number, required: true },
    daysPerWeek: { type: Number, required: true },
    workoutNames: {type: [String], required: true},
    picUrl: {type: String},
    sourceUrl: {type: String}
});

module.exports = mongoose.model('Routines', RoutineSchema);