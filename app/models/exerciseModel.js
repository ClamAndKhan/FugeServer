var mongoose     	= require('mongoose');
var Schema       	= mongoose.Schema;

var ExerciseSchema   = new Schema({
    exerciseName: { type: String, required: true },
    muscleGroups: { type: [String] },
    baseWeight: { type: Number, required: true },
    bodyWeight: { type: Boolean, required: true },
    videoUrl: {type: [String], required: true},
    picUrl: {type: [String], required: true}
});

module.exports = mongoose.model('Exercises', ExerciseSchema);
