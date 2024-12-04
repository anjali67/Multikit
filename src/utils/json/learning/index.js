import {
  course1,
  course2,
  course3,
  course4,
  course5,
  user1,
  user2,
  user3,
  user4,
  learningCrditCard,
  learningWallet,
  netBanking,
} from '../../images/images';
import {UserLine} from '@assets/images/grocery_assets/svg/userline';
import {Download} from '@assets/images/learning_theme/svg/download';
import {Play} from '@assets/images/fitness_theme/svg/play';
import {Lock} from '@assets/images/chat_theme/svg/lock';
import {SettingIcon} from '@assets/images/hotel_theme/svg/settings';
import {HotelBellNotification} from '@assets/images/hotel_theme/svg/bellnotification';
import {Info} from '@assets/images/learning_theme/svg/info';
import {Phone} from '@assets/images/learning_theme/svg/phone';
import appColors from '@theme/appColors';
import {Check} from '@assets/images/ecommerce_theme/svg/check';
import {Help} from '@assets/images/finance_theme/svg/help';
import {LearningShare} from '@assets/images/learning_theme/svg/share';
import {Award} from '@assets/images/learning_theme/svg/award';
import {File} from '@assets/images/learning_theme/svg/file';

export const categories = [
  {
    title: 'learning.design',
  },
  {
    title: 'learning.coding',
  },
  {
    title: 'learning.marketing',
  },
  {
    title: 'learning.healthFitness',
  },
  {
    title: 'learning.art',
  },
  {
    title: 'learning.lifestyle',
  },
  {
    title: 'learning.development',
  },
];

export const continueReadingData = [
  {
    title: 'learning.readingContent',
    image: course1,
    courseCompleted: '55%',
  },
  {
    title: 'learning.readingContent',
    image: course2,
    courseCompleted: '44%',
  },
];

export const featuredCourses = [
  {
    title: 'learning.featuredCourseContent',
    image: course2,
    rate: 4.5,
    price: 50,
  },
  {
    title: 'learning.featuredCourseContent1',
    image: course3,
    rate: 4.5,
    price: 50,
  },
];

export const popularCourse = [
  {
    image: course4,
    title: 'learning.coursesContent',
    numlessons: 10,
    courseRate: 4.5,
    ratings: 1500,
    price: 50,
  },
  {
    image: course5,
    title: 'learning.coursesContent1',
    numlessons: 5,
    courseRate: 4.5,
    ratings: 250,
    price: 50,
  },
];

export const profileData = [
  {
    icon: <UserLine height={'17'} width={'17'} color={appColors.learningBtn} />,
    name: 'learning.personalSetting',
    showDivider: false,
    darkIcon: <UserLine height={'17'} width={'17'} color={appColors.white} />,
    route: '',
  },
  {
    icon: <Download />,
    name: 'learning.downloadOption',
    showDivider: false,
    darkIcon: <Download color={appColors.white} />,
    route: 'LockedCourses',
  },
  {
    icon: <Play height={'20'} color={appColors.learningBtn} />,
    name: 'learning.videoPlayBack',
    showDivider: false,
    darkIcon: <Play height={'20'} color={appColors.white} />,
    route: 'CourseTab',
  },
  {
    icon: <Lock height={'18'} width={'18'} />,
    name: 'learning.accountSecurity',
    showDivider: false,
    darkIcon: <Lock height={'18'} width={'18'} color={appColors.white} />,
    route: '',
  },
  {
    icon: <HotelBellNotification height={'17'} width={'18'} />,
    name: 'learning.learningRemindered',
    showDivider: false,
    darkIcon: (
      <HotelBellNotification
        height={'17'}
        width={'18'}
        color={appColors.white}
      />
    ),
    route: 'InstructorDetail',
  },
  {
    icon: (
      <SettingIcon height={'17'} width={'17'} color={appColors.learningBtn} />
    ),
    name: 'learning.appSetting',
    showDivider: true,
    darkIcon: (
      <SettingIcon height={'17'} width={'17'} color={appColors.white} />
    ),
    route: '',
  },
  {
    icon: <Info />,
    name: 'learning.termsConditions',
    showDivider: false,
    darkIcon: <Info color={appColors.white} />,
    route: '',
  },
  {
    icon: <Phone />,
    name: 'learning.helpCenter',
    showDivider: false,
    darkIcon: <Phone color={appColors.white} />,
    route: '',
  },
];

export const topInstructors = [
  {
    image: user1,
    name: 'blog.markJecno',
    totalStudents: '56,212',
  },
  {
    image: user2,
    name: 'learning.edwardAlso',
    totalStudents: '25,584',
  },
  {
    image: user3,
    name: 'learning.alanJecno',
    totalStudents: '77,50',
  },
  {
    image: user4,
    name: 'blog.markJecno',
    totalStudents: '55,212',
  },
];

export const coursesData = [
  {
    title: 'learning.featuredCourseContent',
    image: course1,
    rate: 4.5,
    price: 50,
  },
  {
    title: 'learning.featuredCourseContent1',
    image: course2,
    rate: 4.5,
    price: 50,
  },
  {
    title: 'learning.featuredCourseContent',
    image: course3,
    rate: 4.5,
    price: 50,
  },
  {
    title: 'learning.featuredCourseContent1',
    image: course4,
    rate: 4.5,
    price: 50,
  },
  {
    title: 'learning.featuredCourseContent',
    image: course5,
    rate: 4.5,
    price: 50,
  },
];

export const allCourse = [
  {
    image: course4,
    title: 'learning.coursesContent',
    numlessons: 10,
    courseRate: 4.5,
    ratings: 1500,
    price: 50,
  },
  {
    image: course5,
    title: 'learning.coursesContent1',
    numlessons: 5,
    courseRate: 4.5,
    ratings: 250,
    price: 50,
  },
  {
    image: course3,
    title: 'learning.coursesContent',
    numlessons: 10,
    courseRate: 4.5,
    ratings: 1500,
    price: 50,
  },
  {
    image: course2,
    title: 'learning.coursesContent1',
    numlessons: 5,
    courseRate: 4.5,
    ratings: 250,
    price: 50,
  },
];

export const courses = [
  {
    title: 'learning.introduction',
    content: 'learning.videoTime',
    icon: <Check />,
    courseStatus: false,
    selectedIcon: '',
  },
  {
    title: 'learning.courseOverview',
    content: 'learning.videoTime',
    icon: <Play />,
    courseStatus: true,
    selectedIcon: <Play color={appColors.learningBtn} />,
  },
  {
    title: 'learning.basicsPython',
    content: 'learning.videoTime',
    icon: (
      <Lock
        color={appColors.white}
        height={'15'}
        width={'15'}
        strokeWidth={'1.4'}
      />
    ),
    courseStatus: false,
    selectedIcon: '',
  },
  {
    title: 'learning.embeddingPHP',
    content: 'learning.videoTime',
    icon: (
      <Lock
        color={appColors.white}
        height={'15'}
        width={'15'}
        strokeWidth={'1.4'}
      />
    ),
    courseStatus: false,
    selectedIcon: '',
  },
  {
    title: 'learning.dynamicData',
    content: 'learning.videoTime',
    icon: (
      <Lock
        color={appColors.white}
        height={'15'}
        width={'15'}
        strokeWidth={'1.4'}
      />
    ),
    courseStatus: false,
    selectedIcon: '',
  },
  {
    title: 'learning.exercise',
    content: 'learning.videoTime',
    icon: (
      <Lock
        color={appColors.white}
        height={'15'}
        width={'15'}
        strokeWidth={'1.4'}
      />
    ),
    courseStatus: false,
    selectedIcon: '',
  },
];

export const Morecourses = [
  {
    icon: <LearningShare />,
    name: 'learning.shareCourse',
    darkIcon: <LearningShare color={appColors.white} />,
  },
  {
    icon: <Award />,
    name: 'learning.courseCertificate',
    darkIcon: <Award color={appColors.white} />,
  },
  {
    icon: (
      <Help
        color={appColors.learningBtn}
        strokeWidth={'1.6'}
        width={'24'}
        height={'24'}
      />
    ),
    name: 'learning.qa',
    darkIcon: (
      <Help
        color={appColors.white}
        strokeWidth={'1.6'}
        width={'24'}
        height={'24'}
      />
    ),
  },
  {
    icon: <File />,
    name: 'learning.notes',
    darkIcon: <File color={appColors.white} />,
  },
  {
    icon: <Download />,
    name: 'learning.archivecourse',
    darkIcon: <Download color={appColors.white} />,
  },
];

export const summaryData = [
  {
    image: course2,
    title: 'learning.courseTitle',
    price: 50,
  },
  {
    image: course3,
    title: 'learning.coursesContent1',
    price: 50,
  },
];

export const paymentArr = [
  {
    icon: learningCrditCard,
    name: 'foodPayment.debitCreditCard',
  },
  {
    icon: learningWallet,
    name: 'foodProfile.Wallets',
  },
  {
    icon: netBanking,
    name: 'paymentsArr.netBanking',
  },
];

export const coursesTab = [
  {
    name: 'learning.courses',
    gotoScreen: 'UnlockedCourses',
  },
  {
    name: 'fitness.more',
    gotoScreen: 'MoreCourses',
  },
];
