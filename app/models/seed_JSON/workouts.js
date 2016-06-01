var CNST = require('../../../constant.js')
var workouts = [
	{
	    workoutName: "The 5x5 Program_1",
	    muscleGroups: [],
	    exercises: [
	    	{
	    		exerciseName: CNST.BARBELL_SQUAT,
	    		percentOfMax: 0.7,
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
	    		percentOfMax: 0.7,
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
	    		percentOfMax: 0.7,
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
	    		percentOfMax: 0.7,
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
	    		percentOfMax: 0.7,
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
	    		percentOfMax: 0.7,
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
	},
	{
	    workoutName: "The 5x5 Program_2",
	    muscleGroups: [],
	    exercises: [
	    	{
	    		exerciseName: CNST.FRONT_BARBELL_SQUAT,
	    		percentOfMax: 0.7,
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
	    		exerciseName: CNST.SEATED_BARBELL_MILITARY_PRESS,
	    		percentOfMax: 0.7,
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
	    		exerciseName: CNST.BARBELL_DEADLIFT,
	    		percentOfMax: 0.7,
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
	    		exerciseName: CNST.BARBELL_CURL,
	    		percentOfMax: 0.7,
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
	    		exerciseName: CNST.SEATED_TRICEPS_PRESS,
	    		percentOfMax: 0.7,
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
	    	}
	    ]
	},
	{
	    workoutName: "German Volume Training_1",
	    muscleGroups: [],
	    exercises: [
	    	{
	    		exerciseName: CNST.DUMBBELL_BENCH_PRESS,
	    		percentOfMax: 0.5,
	    		sets: [
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			}
	    		]
	    	},
	    	{
	    		exerciseName: CNST.BENT_OVER_BARBELL_ROW,
	    		percentOfMax: 0.5,
	    		sets: [
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			}
	    		]
	    	},
	    	{
	    		exerciseName: CNST.BUTTERFLY,
	    		percentOfMax: 0.5,
	    		sets: [
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			}
	    		]
	    	},
	    	{
	    		exerciseName: CNST.INCLINE_BENCH_PULL,
	    		percentOfMax: 0.5,
	    		sets: [
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			}
	    		]
	    	}
	    ]
	},
	{
	    workoutName: "German Volume Training_2",
	    muscleGroups: [],
	    exercises: [
	    	{
	    		exerciseName: CNST.BARBELL_SQUAT,
	    		percentOfMax: 0.5,
	    		sets: [
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			}
	    		]
	    	},
	    	{
	    		exerciseName: CNST.STANDING_CALF_RAISE,
	    		percentOfMax: 0.5,
	    		sets: [
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			}
	    		]
	    	},
	    	{
	    		exerciseName: CNST.SEATED_CALF_RAISE,
	    		percentOfMax: 0.5,
	    		sets: [
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			}
	    		]
	    	},
	    	{
	    		exerciseName: CNST.HANGING_LEG_RAISE,
	    		percentOfMax: 0.5,
	    		sets: [
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			}
	    		]
	    	}
	    ]
	},
	{
	    workoutName: "German Volume Training_3",
	    muscleGroups: [],
	    exercises: [
	    	{
	    		exerciseName: CNST.SEATED_BARBELL_MILITARY_PRESS,
	    		percentOfMax: 0.5,
	    		sets: [
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			}
	    		]
	    	},
	    	{
	    		exerciseName: CNST.DUMBBELL_BICEP_CURL,
	    		percentOfMax: 0.5,
	    		sets: [
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			}
	    		]
	    	},
	    	{
	    		exerciseName: CNST.CABLE_LYING_TRICEPS_EXTENSION,
	    		percentOfMax: 0.5,
	    		sets: [
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			},
	    			{
	    				reps: 10,
	    				weightMultiplier: 1
	    			}
	    		]
	    	}
	    ]
	}


]

module.exports = workouts;