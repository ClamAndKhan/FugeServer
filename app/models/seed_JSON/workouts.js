var CNST = require('../../../constant.js')
var workouts = [
	{
	    workoutName: "The 5x5 Program_1",
	    muscleGroups: [],
	    exercises: [
	    	{
	    		exerciseName: CNST.BARBELL_SQUAT,
	    		sets: [
	    			{
	    				reps: 5,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 5,
	    				weightMultiplier: CNST.FIVE_PERCENT_MULTIPLIER
	    			},
	    			{
	    				reps: 5,
	    				weightMultiplier: Math.pow(CNST.FIVE_PERCENT_MULTIPLIER,2)
	    			},
	    			{
	    				reps: 5,
	    				weightMultiplier: Math.pow(CNST.FIVE_PERCENT_MULTIPLIER,3)
	    			},
	    			{
	    				reps: 5,
	    				weightMultiplier: Math.pow(CNST.FIVE_PERCENT_MULTIPLIER,4)
	    			}
	    		]
	    	},
	    	{
	    		exerciseName: CNST.BARBELL_BENCH_PRESS_MEDIUM_GRIP,
	    		sets: [
	    			{
	    				reps: 5,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 5,
	    				weightMultiplier: CNST.FIVE_PERCENT_MULTIPLIER
	    			},
	    			{
	    				reps: 5,
	    				weightMultiplier: Math.pow(CNST.FIVE_PERCENT_MULTIPLIER,2)
	    			},
	    			{
	    				reps: 5,
	    				weightMultiplier: Math.pow(CNST.FIVE_PERCENT_MULTIPLIER,3)
	    			},
	    			{
	    				reps: 5,
	    				weightMultiplier: Math.pow(CNST.FIVE_PERCENT_MULTIPLIER,4)
	    			}
	    		]
	    	},
	    	{
	    		exerciseName: CNST.BENT_OVER_BARBELL_ROW,
	    		sets: [
	    			{
	    				reps: 5,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 5,
	    				weightMultiplier: CNST.FIVE_PERCENT_MULTIPLIER
	    			},
	    			{
	    				reps: 5,
	    				weightMultiplier: Math.pow(CNST.FIVE_PERCENT_MULTIPLIER,2)
	    			},
	    			{
	    				reps: 5,
	    				weightMultiplier: Math.pow(CNST.FIVE_PERCENT_MULTIPLIER,3)
	    			},
	    			{
	    				reps: 5,
	    				weightMultiplier: Math.pow(CNST.FIVE_PERCENT_MULTIPLIER,4)
	    			}
	    		]
	    	},
	    	{
	    		exerciseName: CNST.PULLUPS,
	    		sets: [
	    			{
	    				reps: 8,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 8,
	    				weightMultiplier: 1
	    			}
	    		]
	    	},
	    	{
	    		exerciseName: CNST.SIDE_LATERAL_RAISE,
	    		sets: [
	    			{
	    				reps: 8,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 8,
	    				weightMultiplier: CNST.FIVE_PERCENT_MULTIPLIER
	    			}
	    		]
	    	},
	    	{
	    		exerciseName: CNST.SITUPS,
	    		sets: [
	    			{
	    				reps: 15,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 15,
	    				weightMultiplier: 1
	    			}
	    		]
	    	},
	    ]
	}

]

module.exports = workouts;