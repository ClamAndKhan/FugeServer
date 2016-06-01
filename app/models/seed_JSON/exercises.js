var CNST = require('../../../constant.js')

var exercises = [
	{
		exerciseName: CNST.BARBELL_SQUAT,
		muscleGroups: [],
		baseWeight: CNST.BARBELL_SQUAT_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/118000/118981m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/squats-2.png"
	},
	{
		exerciseName: CNST.BARBELL_BENCH_PRESS_MEDIUM_GRIP,
		muscleGroups: [],
		baseWeight: CNST.BARBELL_BENCH_PRESS_MEDIUM_GRIP_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/52000/53781m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/decline-bench-press-1.png",
	},
	{
		exerciseName: CNST.BENT_OVER_BARBELL_ROW,
		muscleGroups: [],
		baseWeight: CNST.BENT_OVER_BARBELL_ROW_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/38411m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/barbell-rear-delt-row-2.png"
	},
	{
		exerciseName: CNST.PULLUPS,
		muscleGroups: [],
		baseWeight: CNST.PULLUPS_WEIGHT,
		bodyWeight: true,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40861m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/gironda-sternum-chins-1.png"
	},
	{
		exerciseName: CNST.SIDE_LATERAL_RAISE,
		muscleGroups: [],
		baseWeight: CNST.SIDE_LATERAL_RAISE_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/41051m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/dumbbell-lateral-raises-1.png"
	},
	{
		exerciseName: CNST.SITUPS,
		muscleGroups: [],
		baseWeight: CNST.SITUPS_WEIGHT,
		bodyWeight: true,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40861m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/gironda-sternum-chins-1.png"
	},
	{
		exerciseName: CNST.FRONT_BARBELL_SQUAT,
		muscleGroups: [],
		baseWeight: CNST.FRONT_BARBELL_SQUAT_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/54000/54081m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/front-squat-2-857x1024.png"
	},
	{
		exerciseName: CNST.SEATED_BARBELL_MILITARY_PRESS,
		muscleGroups: [],
		baseWeight: CNST.SEATED_BARBELL_MILITARY_PRESS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/54000/54081m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/seated-military-shoulder-press-1.png"
	},
	{
		exerciseName: CNST.BARBELL_DEADLIFT,
		muscleGroups: [],
		baseWeight: CNST.BARBELL_DEADLIFT_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/118000/118911m.mp4",
		picUrl: "http://www.mygym.co.uk/wp-content/uploads/2015/04/barbell-rear-delt-row-1-e1429515331263.png"
	},
	{
		exerciseName: CNST.BARBELL_CURL,
		muscleGroups: [],
		baseWeight: CNST.BARBELL_CURL_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/38241m.mp4",
		picUrl: "http://www.canadiangirlruns.com/wp-content/uploads/2015/06/barbell-curl.png"
	},
	{
		exerciseName: CNST.SEATED_TRICEPS_PRESS,
		muscleGroups: [],
		baseWeight: CNST.SEATED_TRICEPS_PRESS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40931m.mp4",
		picUrl: "https://www.gymwolf.com/images/exercises/1162_1.jpg"
	},
	{
		exerciseName: CNST.DUMBBELL_BENCH_PRESS,
		muscleGroups: [],
		baseWeight: CNST.DUMBBELL_BENCH_PRESS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/39001m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/decline-dumbbell-bench-press-2.png"
	},
	{
		exerciseName: CNST.BUTTERFLY,
		muscleGroups: [],
		baseWeight: CNST.BUTTERFLY_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/38551m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/butterfly-machine-1.png"
	},
	{
		exerciseName: CNST.INCLINE_BENCH_PULL,
		muscleGroups: [],
		baseWeight: CNST.INCLINE_BENCH_PULL_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40191m.mp4",
		picUrl: "http://mblogthumb2.phinf.naver.net/20121127_5/y2kyoyo1_1353943278218BtlIO_PNG/Incline_Bench_Pull1.png?type=w2"
	},
	{
		exerciseName: CNST.STANDING_CALF_RAISE,
		muscleGroups: [],
		baseWeight: CNST.STANDING_CALF_RAISE_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/41821m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/standing-calf-raises-1.gif"
	},
	{
		exerciseName: CNST.SEATED_CALF_RAISE,
		muscleGroups: [],
		baseWeight: CNST.SEATED_CALF_RAISE_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40201m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/seated-calf-raise-2-2.gif"
	},
	{
		exerciseName: CNST.HANGING_LEG_RAISE,
		muscleGroups: [],
		baseWeight: CNST.HANGING_LEG_RAISE_WEIGHT,
		bodyWeight: true,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40201m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/seated-calf-raise-2-2.gif"
	},
	{
		exerciseName: CNST.DUMBBELL_BICEP_CURL,
		muscleGroups: [],
		baseWeight: CNST.DUMBBELL_BICEP_CURL_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/39011m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/biceps-curl-2.gif"
	},
	{
		exerciseName: CNST.CABLE_LYING_TRICEPS_EXTENSION,
		muscleGroups: [],
		baseWeight: CNST.CABLE_LYING_TRICEPS_EXTENSION_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/38641m.mp4",
		picUrl: "https://www.gymwolf.com/images/exercises/1189_1.jpg"
	},
	{
		exerciseName: CNST.HAMMER_CURLS,
		muscleGroups: [],
		baseWeight: CNST.HAMMER_CURLS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40021m.mp4",
		picUrl: "http://3.bp.blogspot.com/-dKT5nC5cs_I/UQJVDR17DBI/AAAAAAAAAFo/EixudfqrVK4/s1600/hammer-curl-2.png"
	},
	{
		exerciseName: CNST.STANDING_BICEPS_CABLE_CURL,
		muscleGroups: [],
		baseWeight: CNST.STANDING_BICEPS_CABLE_CURL_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/41781m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/standing-biceps-curl-2.gif"
	},
	{
		exerciseName: CNST.CLOSE_GRIP_BARBELL_BENCH_PRESS,
		muscleGroups: [],
		baseWeight: CNST.CLOSE_GRIP_BARBELL_BENCH_PRESS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/58000/59071m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/standing-biceps-curl-2.gif"
	},
	{
		exerciseName: CNST.CABLE_ROPE_OVERHEAD_TRICEPS_EXTENSION,
		muscleGroups: [],
		baseWeight: CNST.CABLE_ROPE_OVERHEAD_TRICEPS_EXTENSION_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/38671m.mp4",
		picUrl: "http://www.gymbook.ru/images/img/standing-triceps-extension-2.gif"
	},
	{
		exerciseName: CNST.LEG_PRESS,
		muscleGroups: [],
		baseWeight: CNST.LEG_PRESS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40571m.mp4",
		picUrl: "https://bretcontreras.com/wp-content/uploads/Leg-press-machine-diagram-top.png"
	},
	{
		exerciseName: CNST.LEG_EXTENSIONS,
		muscleGroups: [],
		baseWeight: CNST.LEG_EXTENSIONS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40541m.mp4",
		picUrl: "https://upload.wikimedia.org/wikipedia/commons/5/58/Leg-extensions-2-672x1024.png"
	},
	{
		exerciseName: CNST.INCLINE_DUMBBELL_BENCH_PRESS,
		muscleGroups: [],
		baseWeight: CNST.INCLINE_DUMBBELL_BENCH_PRESS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40301m.mp4",
		picUrl: "http://musclebuildingprograms.org/wp-images/dumbbell-chest-press.jpg"
	},
	{
		exerciseName: CNST.CABLE_CROSSOVER,
		muscleGroups: [],
		baseWeight: CNST.CABLE_CROSSOVER_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/38561m.mp4",
		picUrl: "http://munfitnessblog.com/wp-content/uploads/2011/09/Cartoon-Cable-Crossover.jpg"
	},
	{
		exerciseName: CNST.WIDE_GRIP_LAT_PULLDOWN,
		muscleGroups: [],
		baseWeight: CNST.WIDE_GRIP_LAT_PULLDOWN_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/41441m.mp4",
		picUrl: "https://www.gymwolf.com/images/exercises/1248_0.jpg"
	},
	{
		exerciseName: CNST.SEATED_CABLE_ROW,
		muscleGroups: [],
		baseWeight: CNST.SEATED_CABLE_ROW_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40231m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/cable-seated-rows-1.png"
	},
	{
		exerciseName: CNST.DUMBBELL_SHOULDER_PRESS,
		muscleGroups: [],
		baseWeight: CNST.DUMBBELL_SHOULDER_PRESS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/39131m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/dumbbell-shoulder-press-1.png"
	},
	{
		exerciseName: CNST.FRONT_DUMBBELL_RAISE,
		muscleGroups: [],
		baseWeight: CNST.FRONT_DUMBBELL_RAISE_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/39911m.mp4",
		picUrl: "http://www.workoutroutinewarehouse.com/images/dumbbell-front-raises-2-1.png"
	},
	{
		exerciseName: CNST.SIDE_LATERAL_RAISE,
		muscleGroups: [],
		baseWeight: CNST.SIDE_LATERAL_RAISE_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/41051m.mp4",
		picUrl: "http://lovemymuscles.com/wp-content/uploads/2012/06/lateral-rases.jpg"
	},
	{
		exerciseName: CNST.INCLINE_DUMBBELL_CURL,
		muscleGroups: [],
		baseWeight: CNST.INCLINE_DUMBBELL_CURL_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40241m.mp4",
		picUrl: "http://www.freeworkoutlog.com/images/exercises/1146-1_275x275.png"
	}


]
module.exports = exercises