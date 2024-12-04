import {Yoga} from '@assets/images/fitness_theme/svg/yoga';
import {Stretching} from '@assets/images/fitness_theme/svg/stretching';
import {Running} from '@assets/images/fitness_theme/svg/running';
import {Target} from '@assets/images/fitness_theme/svg/target';
import {Gender} from '@assets/images/fitness_theme/svg/gender';
import {Ruler} from '@assets/images/fitness_theme/svg/ruler';
import {Restart} from '@assets/images/fitness_theme/svg/restart';
import {VideoVolume} from '@assets/images/fitness_theme/svg/volume';
import {ShareIcon} from '@assets/images/common/svg/shareIcon';
import {Rate} from '@assets/images/fitness_theme/svg/rate';

import {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
  exercise12,
  exercise13,
  exercise8,
  exercise9,
  exercise10,
  exercise11,
  workout,
  flash,
  exerciseGif1,
  exerciseGif2,
  exerciseGif3,
  exerciseGif4,
  exerciseGif5,
  exerciseGif6,
} from '../../images/images';
import appColors from '@theme/appColors';

export const ultimateGoals = [
  {
    id: 0,
    selected: false,
    name: 'fitness.loseWeight',
  },
  {
    id: 1,
    selected: false,
    name: 'fitness.maintainWeight',
  },
  {
    id: 2,
    selected: false,
    name: 'fitness.gainWeight',
  },
  {
    id: 3,
    selected: false,
    name: 'fitness.gainMuscle',
  },
  {
    id: 4,
    selected: false,
    name: 'fitness.manageStress',
  },
  {
    id: 5,
    selected: false,
    name: 'fitness.increasestamina',
  },
];

export const losingWeightData = [
  {
    id: 0,
    selected: false,
    name: 'fitness.situationalBarriers',
  },
  {
    id: 1,
    selected: false,
    name: 'fitness.stressandDepression',
  },
  {
    id: 2,
    selected: false,
    name: 'fitness.socialPressure',
  },
  {
    id: 3,
    selected: false,
    name: 'fitness.weightLoss',
  },
  {
    id: 4,
    selected: false,
    name: 'fitness.foodcraving',
  },

  {
    id: 5,
    selected: false,
    name: 'fitness.costDiet',
  },
];

export const activityLevelsData = [
  {
    id: 0,
    selected: false,
    name: 'fitness.sedentary',
  },
  {
    id: 1,
    selected: false,
    name: 'fitness.lightlyActive',
  },
  {
    id: 2,
    selected: false,
    name: 'fitness.active',
  },
  {
    id: 3,
    selected: false,
    name: 'fitness.veryActive',
  },
];

export const gender = [
  {
    id: 0,
    name: 'fitness.male',
  },
  {
    id: 1,
    name: 'fitness.female',
  },
];

export const categoriesData = [
  {
    icon: <Yoga />,
    name: 'fitness.yoga',
  },
  {
    icon: <Stretching />,
    name: 'fitness.HIIT',
  },
  {
    icon: <Running />,
    name: 'fitness.running',
  },
  {
    icon: <Target />,
    name: 'fitness.target',
  },
];

export const bodyFocusData = [
  {
    image: exercise1,
    name: 'fitness.exerciseTitle',
    minutes: 22,
  },
  {
    image: exercise2,
    name: 'fitness.exerciseTitle1',
    minutes: 30,
  },
  {
    image: exercise3,
    name: 'fitness.exerciseTitle2',
    minutes: 22,
  },
  {
    image: exercise4,
    name: 'fitness.exerciseTitle3',
    minutes: 30,
  },
];

export const boostEnergyData = [
  {
    image: exercise5,
    name: 'fitness.lowerWorkout',
    time: 28,
    calories: 200,
  },
  {
    image: exercise6,
    name: 'fitness.stretchYoga',
    time: 30,
    calories: 150,
  },
  {
    image: exercise7,
    name: 'fitness.boostTitle',
    time: 28,
    calories: 200,
  },
];

export const potentialData = [
  {
    image: exercise12,
    name: 'fitness.legButt',
    time: 18,
  },
  {
    image: exercise13,
    name: 'fitness.abs',
    time: 16,
  },
];

export const exercisesData = [
  {
    image: exercise8,
    title: 'fitness.exerciseTitle',
    workouts: 10,
    time: 15,
  },
  {
    image: exercise9,
    title: 'fitness.exerciseTitle',
    workouts: 10,
    time: 15,
  },
  {
    image: exercise10,
    title: 'fitness.exerciseTitle',
    workouts: 10,
    time: 15,
  },
  {
    image: exercise11,
    title: 'fitness.exerciseTitle',
    workouts: 10,
    time: 15,
  },
];

export const reportingData = [
  {
    image: workout,
    name: 'fitness.workout',
    content: 'fitness.sets',
  },
  {
    image: flash,
    name: 'fitness.minutes',
    content: '36.00',
  },
];

export const weeklyExercise = [
  {
    image: exerciseGif1,
    name: 'fitness.armCircle',
    times: 6,
  },
  {
    image: exerciseGif2,
    name: 'fitness.jumpingJacks',
    times: 15,
  },
  {
    image: exerciseGif3,
    name: 'fitness.jumpingJacks',
    times: 12,
  },
  {
    image: exerciseGif4,
    name: 'fitness.kneeTucks',
    times: 20,
  },
  {
    image: exerciseGif5,
    name: 'fitness.scissorJumps',
    times: 30,
  },
  {
    image: exerciseGif6,
    name: 'fitness.runningJump',
    times: 10,
  },
];

export const profilesData = [
  {
    name: 'fitness.gender',
    icon: <Gender />,
    darkIcon: <Gender color={appColors.white} />,
  },
  {
    name: 'fitness.matric',
    icon: <Ruler />,
    darkIcon: <Ruler color={appColors.white} />,
  },
  {
    name: 'fitness.restart',
    icon: <Restart />,
    darkIcon: <Restart color={appColors.white} />,
  },
  {
    name: 'fitness.soundOption',
    icon: (
      <VideoVolume width={'23'} color={appColors.fontColor} height={'50'} />
    ),
    darkIcon: (
      <VideoVolume color={appColors.white} width={'23'} height={'50'} />
    ),
  },
  {
    name: 'fitness.shareWithFriends',
    icon: (
      <ShareIcon
        height={'19'}
        width={'19'}
        color={appColors.fontColor}
        strokeWidth={'1.7'}
      />
    ),
    darkIcon: (
      <ShareIcon
        height={'18'}
        width={'18'}
        color={appColors.white}
        strokeWidth={'1.7'}
      />
    ),
  },
  {
    name: 'fitness.rateUs',
    icon: <Rate />,
    darkIcon: <Rate color={appColors.white} />,
  },
];
