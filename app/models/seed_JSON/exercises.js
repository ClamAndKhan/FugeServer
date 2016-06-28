var CNST = require('../../../constant.js')

var exercises = [
	{
		exerciseName: CNST.BARBELL_SQUAT,
		muscleGroups: [],
		baseWeight: CNST.BARBELL_SQUAT_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/118000/118981m.mp4",
		picUrl: "http://us.123rf.com/450wm/jalephoto/jalephoto1406/jalephoto140600155/28763142-young-man-performing-barbell-squats--one-of-the-best-bodybuilding-exercise-for-legs.jpg?ver=6"
	},
	{
		exerciseName: CNST.BARBELL_BENCH_PRESS_MEDIUM_GRIP,
		muscleGroups: [],
		baseWeight: CNST.BARBELL_BENCH_PRESS_MEDIUM_GRIP_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/52000/53781m.mp4",
		picUrl: "http://thumb7.shutterstock.com/display_pic_with_logo/218452/247521391/stock-photo-brutal-athletic-man-pumping-up-muscles-on-bench-press-247521391.jpg",
	},
	{
		exerciseName: CNST.BENT_OVER_BARBELL_ROW,
		muscleGroups: [],
		baseWeight: CNST.BENT_OVER_BARBELL_ROW_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/38411m.mp4",
		picUrl: "http://thumb101.shutterstock.com/display_pic_with_logo/1623779/164249603/stock-photo-heavy-weights-man-doing-heavy-weight-exercise-for-back-164249603.jpg"
	},
	{
		exerciseName: CNST.PULLUPS,
		muscleGroups: [],
		baseWeight: CNST.PULLUPS_WEIGHT,
		bodyWeight: true,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40861m.mp4",
		picUrl: "http://thumb101.shutterstock.com/display_pic_with_logo/3025937/287184173/stock-photo-strong-man-doing-pull-ups-287184173.jpg"
	},
	{
		exerciseName: CNST.SIDE_LATERAL_RAISE,
		muscleGroups: [],
		baseWeight: CNST.SIDE_LATERAL_RAISE_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/41051m.mp4",
		picUrl: "http://us.123rf.com/450wm/jalephoto/jalephoto1312/jalephoto131200481/24163187-shoulders-cable-lateral-raise-exercise.jpg?ver=6"
	},
	{
		exerciseName: CNST.SITUPS,
		muscleGroups: [],
		baseWeight: CNST.SITUPS_WEIGHT,
		bodyWeight: true,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40861m.mp4",
		picUrl: "http://thumb7.shutterstock.com/display_pic_with_logo/1040086/198752171/stock-photo-fitness-model-with-large-muscles-doing-situps-198752171.jpg"
	},
	{
		exerciseName: CNST.FRONT_BARBELL_SQUAT,
		muscleGroups: [],
		baseWeight: CNST.FRONT_BARBELL_SQUAT_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/54000/54081m.mp4",
		picUrl: "http://us.123rf.com/450wm/dolgachov/dolgachov1503/dolgachov150301001/37674319-sport-bodybuilding-lifestyle-and-people-concept--young-man-with-barbell-doing-squats-in-gym.jpg?ver=6"
	},
	{
		exerciseName: CNST.SEATED_BARBELL_MILITARY_PRESS,
		muscleGroups: [],
		baseWeight: CNST.SEATED_BARBELL_MILITARY_PRESS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/54000/54081m.mp4",
		picUrl: "http://previews.123rf.com/images/fotomircea/fotomircea1211/fotomircea121100009/16168180-artistic-shot-black-and-white-of-a-young-bodybuilder-hard-training-in-the-gym-dumbbell-shoulder-pres-Stock-Photo.jpg"
	},
	{
		exerciseName: CNST.BARBELL_DEADLIFT,
		muscleGroups: [],
		baseWeight: CNST.BARBELL_DEADLIFT_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/118000/118911m.mp4",
		picUrl: "http://us.123rf.com/450wm/jalephoto/jalephoto1411/jalephoto141100685/34116704-male-fitness-athlete-lifting-deadlift-in-the-gym.jpg"
	},
	{
		exerciseName: CNST.BARBELL_CURL,
		muscleGroups: [],
		baseWeight: CNST.BARBELL_CURL_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/38241m.mp4",
		picUrl: "http://us.123rf.com/450wm/fotomircea/fotomircea1410/fotomircea141000022/32266311-artistic-shot-golden-retouch-of-a-young-bodybuilder-hard-training-in-the-gym-wide-grip-standing-barb.jpg?ver=6"
	},
	{
		exerciseName: CNST.SEATED_TRICEPS_PRESS,
		muscleGroups: [],
		baseWeight: CNST.SEATED_TRICEPS_PRESS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40931m.mp4",
		picUrl: "http://us.123rf.com/450wm/julenochek/julenochek1605/julenochek160500213/57263077-strong-bodybuilder-doing-triceps-extension-with-dumbbell.jpg"
	},
	{
		exerciseName: CNST.DUMBBELL_BENCH_PRESS,
		muscleGroups: [],
		baseWeight: CNST.DUMBBELL_BENCH_PRESS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/39001m.mp4",
		picUrl: "http://us.123rf.com/450wm/xalanx/xalanx1509/xalanx150900328/45258615-young-fit-man-working-out-at-bench-press-with-dumbbells.jpg"
	},
	{
		exerciseName: CNST.BUTTERFLY,
		muscleGroups: [],
		baseWeight: CNST.BUTTERFLY_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/38551m.mp4",
		picUrl: "http://us.123rf.com/450wm/jalephoto/jalephoto1312/jalephoto131200481/24163187-shoulders-cable-lateral-raise-exercise.jpg?ver=6"
	},
	{
		exerciseName: CNST.INCLINE_BENCH_PULL,
		muscleGroups: [],
		baseWeight: CNST.INCLINE_BENCH_PULL_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40191m.mp4",
		picUrl: "http://previews.123rf.com/images/jalephoto/jalephoto1310/jalephoto131000022/22602181-Bent-Over-Barbell-Row-Stock-Photo.jpg"
	},
	{
		exerciseName: CNST.STANDING_CALF_RAISE,
		muscleGroups: [],
		baseWeight: CNST.STANDING_CALF_RAISE_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/41821m.mp4",
		picUrl: "http://thumb7.shutterstock.com/display_pic_with_logo/73285/337155155/stock-photo-young-man-shows-finishing-position-of-standing-dumbbell-calf-raise-with-dumbbels-workout-isolated-337155155.jpg"
	},
	{
		exerciseName: CNST.SEATED_CALF_RAISE,
		muscleGroups: [],
		baseWeight: CNST.SEATED_CALF_RAISE_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40201m.mp4",
		picUrl: "http://thumb9.shutterstock.com/display_pic_with_logo/8627/8627,1301533421,2/stock-photo-bodybuilder-74289841.jpg"
	},
	{
		exerciseName: CNST.HANGING_LEG_RAISE,
		muscleGroups: [],
		baseWeight: CNST.HANGING_LEG_RAISE_WEIGHT,
		bodyWeight: true,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40201m.mp4",
		picUrl: "http://thumb9.shutterstock.com/display_pic_with_logo/1623779/320795102/stock-photo-young-man-performing-hanging-leg-raises-exercise-one-of-the-most-effective-ab-exercises-320795102.jpg"
	},
	{
		exerciseName: CNST.DUMBBELL_BICEP_CURL,
		muscleGroups: [],
		baseWeight: CNST.DUMBBELL_BICEP_CURL_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/39011m.mp4",
		picUrl: "http://thumb7.shutterstock.com/display_pic_with_logo/61398/61398,1295193332,5/stock-photo-young-bodybuilder-training-in-the-gym-standing-biceps-cable-curl-69079705.jpg"
	},
	{
		exerciseName: CNST.CABLE_LYING_TRICEPS_EXTENSION,
		muscleGroups: [],
		baseWeight: CNST.CABLE_LYING_TRICEPS_EXTENSION_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/38641m.mp4",
		picUrl: "http://thumb7.shutterstock.com/display_pic_with_logo/917120/293234051/stock-photo-young-adult-bodybuilder-doing-triceps-overhead-extension-rope-exercise-293234051.jpg"
	},
	{
		exerciseName: CNST.HAMMER_CURLS,
		muscleGroups: [],
		baseWeight: CNST.HAMMER_CURLS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40021m.mp4",
		picUrl: "http://thumb9.shutterstock.com/display_pic_with_logo/217465/225536476/stock-photo-a-man-on-a-black-background-doing-hammer-curls-225536476.jpg"
	},
	{
		exerciseName: CNST.STANDING_BICEPS_CABLE_CURL,
		muscleGroups: [],
		baseWeight: CNST.STANDING_BICEPS_CABLE_CURL_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/41781m.mp4",
		picUrl: "http://thumb7.shutterstock.com/display_pic_with_logo/61398/61398,1295193332,5/stock-photo-young-bodybuilder-training-in-the-gym-standing-biceps-cable-curl-69079705.jpg"
	},
	{
		exerciseName: CNST.CLOSE_GRIP_BARBELL_BENCH_PRESS,
		muscleGroups: [],
		baseWeight: CNST.CLOSE_GRIP_BARBELL_BENCH_PRESS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/58000/59071m.mp4",
		picUrl: "https://download.fotolia.com/Content/CompImage500/FotoliaComp_29077770_4QAs0X8rmY9rMUpA6CV9n4zrv7I5wdzq_W95"
	},
	{
		exerciseName: CNST.CABLE_ROPE_OVERHEAD_TRICEPS_EXTENSION,
		muscleGroups: [],
		baseWeight: CNST.CABLE_ROPE_OVERHEAD_TRICEPS_EXTENSION_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/38671m.mp4",
		picUrl: "https://download.fotolia.com/Content/CompImage500/FotoliaComp_106918517_WvDiN4JnjLCFw7RrucHGu7d7o8FksbcF_W95"
	},
	{
		exerciseName: CNST.LEG_PRESS,
		muscleGroups: [],
		baseWeight: CNST.LEG_PRESS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40571m.mp4",
		picUrl: "https://download.fotolia.com/Content/CompImage500/FotoliaComp_108314449_edcawWbz34DzMjuAKfsbPPfpcDTx2qsX_W95"
	},
	{
		exerciseName: CNST.LEG_EXTENSIONS,
		muscleGroups: [],
		baseWeight: CNST.LEG_EXTENSIONS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40541m.mp4",
		picUrl: "https://download.fotolia.com/Content/CompImage500/FotoliaComp_108314256_qUfy7wWS4uiepj7whX3Sgacw59nZAF5q_W95"
	},
	{
		exerciseName: CNST.INCLINE_DUMBBELL_BENCH_PRESS,
		muscleGroups: [],
		baseWeight: CNST.INCLINE_DUMBBELL_BENCH_PRESS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40301m.mp4",
		picUrl: "https://download.fotolia.com/Content/CompImage500/FotoliaComp_111046255_F4kShcAC68IFvsYtk3RPt2yz4AWNXIFc_W95"
	},
	{
		exerciseName: CNST.CABLE_CROSSOVER,
		muscleGroups: [],
		baseWeight: CNST.CABLE_CROSSOVER_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/38561m.mp4",
		picUrl: "https://download.fotolia.com/Content/CompImage500/FotoliaComp_96695704_cf9iG2BFLoqcO8fq7SVmYVImQCRwzG9R_W95"
	},
	{
		exerciseName: CNST.WIDE_GRIP_LAT_PULLDOWN,
		muscleGroups: [],
		baseWeight: CNST.WIDE_GRIP_LAT_PULLDOWN_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/41441m.mp4",
		picUrl: "http://thumb9.shutterstock.com/display_pic_with_logo/835171/215079832/stock-photo-fit-man-on-lat-pulldown-machine-at-the-health-club-work-out-on-pulldown-weight-machine-215079832.jpg"
	},
	{
		exerciseName: CNST.SEATED_CABLE_ROW,
		muscleGroups: [],
		baseWeight: CNST.SEATED_CABLE_ROW_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40231m.mp4",
		picUrl: "http://thumbs.dreamstime.com/x/back-exercises-seated-row-machine-healthy-male-doing-gym-39903007.jpg"
	},
	{
		exerciseName: CNST.DUMBBELL_SHOULDER_PRESS,
		muscleGroups: [],
		baseWeight: CNST.DUMBBELL_SHOULDER_PRESS_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/39131m.mp4",
		picUrl: "http://static.dreamstime.com/x/bodybuilder-training-24728582.jpg"
	},
	{
		exerciseName: CNST.FRONT_DUMBBELL_RAISE,
		muscleGroups: [],
		baseWeight: CNST.FRONT_DUMBBELL_RAISE_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/38000/39911m.mp4",
		picUrl: "http://thumb101.shutterstock.com/display_pic_with_logo/514156/369981857/stock-photo-portrait-of-confident-muscular-man-lifting-dumbbell-while-standing-against-black-background-369981857.jpg"
	},
	{
		exerciseName: CNST.SIDE_LATERAL_RAISE,
		muscleGroups: [],
		baseWeight: CNST.SIDE_LATERAL_RAISE_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/41051m.mp4",
		picUrl: "http://us.123rf.com/450wm/jalephoto/jalephoto1312/jalephoto131200481/24163187-shoulders-cable-lateral-raise-exercise.jpg?ver=6"
	},
	{
		exerciseName: CNST.INCLINE_DUMBBELL_CURL,
		muscleGroups: [],
		baseWeight: CNST.INCLINE_DUMBBELL_CURL_WEIGHT,
		bodyWeight: false,
		videoUrl: "http://videocdn.bodybuilding.com/video/mp4/40000/40241m.mp4",
		picUrl: "https://download.fotolia.com/Content/CompImage500/FotoliaComp_108309839_tt93ZFMA5KMCKqocunUZ2vPqy1qDpO4Y_W95"
	}


]
module.exports = exercises