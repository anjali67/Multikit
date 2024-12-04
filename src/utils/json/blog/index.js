import {blogBg} from '../../images/images';
import {Blog1} from '@assets/images/blog_theme/svg/blog1';
import {Blog2} from '@assets/images/blog_theme/svg/blog2';
import {Blog3} from '@assets/images/blog_theme/svg/blog3';
import {Blog4} from '@assets/images/blog_theme/svg/blog4';
import {Blog5} from '@assets/images/blog_theme/svg/blog5';
import {Blog6} from '@assets/images/blog_theme/svg/blog6';
import {Blog7} from '@assets/images/blog_theme/svg/blog7';
import {Blog8} from '@assets/images/blog_theme/svg/blog8';
import {Blog9} from '@assets/images/blog_theme/svg/blog9';
import {Blog10} from '@assets/images/blog_theme/svg/blog10';
import appColors from '@theme/appColors';
import {BlogProfile} from '@assets/images/blog_theme/svg/user';
import {NotificationIcon} from '@assets/images/blog_theme/svg/notification';
import {LanguageIcon} from '@assets/images/blog_theme/svg/language';
import {PrivacyIcon} from '@assets/images/blog_theme/svg/privacy';
import {SettingIcon} from '@assets/images/blog_theme/svg/setting';
import {
  blogImg1,
  blogImg2,
  blogImg3,
  blogImg4,
  blogImg5,
  blogImg6,
  blogImg7,
  blogImg8,
  blogImg9,
  blogUser1,
  blogUser2,
  blogUser3,
  notification,
  notification1,
  notification2,
  notification3,
} from '../../images/images';

import {LockIcon} from '@assets/images/blog_theme/svg/lock';

import {BlogHomeIcon} from '@assets/images/blog_theme/svg/home';
import {BlogSearchIcon} from '@assets/images/blog_theme/svg/search';
import {AddPostIcon} from '@assets/images/blog_theme/svg/add';

export const onBoardData = [
  {
    image: blogBg,
    title: 'blog.writeBlog',
    content: 'blog.onBoardingContent',
  },
  {
    image: blogBg,
    title: 'blog.writeBlog',
    content: 'blog.onBoardContent1',
  },
  {
    image: blogBg,
    title: 'blog.writeBlog',
    content: 'blog.onBoardingContent',
  },
];

export const chooseTopics = [
  {
    id: 0,
    icon: <Blog1 />,
    name: 'blog.business',
    selected: false,
    selectedIcon: <Blog1 color={appColors.white} />,
  },
  {
    id: 1,
    icon: <Blog2 />,
    name: 'blog.sports',
    selected: false,
    selectedIcon: <Blog2 color={appColors.white} />,
  },
  {
    id: 2,
    icon: <Blog3 />,
    name: 'blog.politics',
    selected: false,
    selectedIcon: <Blog3 color={appColors.white} />,
  },
  {
    id: 3,
    icon: <Blog4 />,
    name: 'blog.science',
    selected: false,
    selectedIcon: <Blog4 color={appColors.white} />,
  },
  {
    id: 4,
    icon: <Blog5 />,
    name: 'blog.artFusion',
    selected: false,
    selectedIcon: <Blog5 color={appColors.white} />,
  },
  {
    id: 5,
    icon: <Blog6 />,
    name: 'blog.books',
    selected: false,
    selectedIcon: <Blog6 color={appColors.white} />,
  },
  {
    id: 6,
    icon: <Blog7 />,
    name: 'blog.fashion',
    selected: false,
    selectedIcon: <Blog7 color={appColors.white} />,
  },
  {
    id: 7,
    icon: <Blog8 />,
    name: 'blog.electronics',
    selected: false,
    selectedIcon: <Blog8 color={appColors.white} />,
  },
  {
    id: 8,
    icon: <Blog9 />,
    name: 'blog.travel',
    selected: false,
    selectedIcon: <Blog9 color={appColors.white} />,
  },
  {
    id: 9,
    icon: <Blog10 />,
    name: 'blog.food',
    selected: false,
    selectedIcon: <Blog10 color={appColors.white} />,
  },
];

export const Articles = [
  {
    image: blogImg1,
    title: 'blog.blogContent',
    progress: '80%',
  },
  {
    image: blogImg2,
    title: 'blog.blogContent',
    progress: '60%',
  },
];

export const categoryFilter = [
  {
    name: 'blog.trending',
  },
  {
    name: 'blog.latestNews',
  },
  {
    name: 'blog.business',
  },
];

export const categoriesData = [
  {
    id: 1,
    image: blogImg3,
    title: 'blog.categoryTitle',
    content: 'blog.categoryContent',
    user: 'blog.user',
    dateTime: 'blog.dateTime',
  },
  {
    id: 1,
    image: blogImg4,
    title: 'blog.categoryTitle',
    content: 'blog.categoryContent',
    user: 'blog.user',
    dateTime: 'blog.dateTime',
  },
  {
    id: 1,
    image: blogImg5,
    title: 'blog.categoryTitle',
    content: 'blog.categoryContent',
    user: 'blog.user',
    dateTime: 'blog.dateTime',
  },
  {
    id: 2,
    image: blogImg4,
    title: 'blog.categoryTitle',
    content: 'blog.categoryContent',
    user: 'blog.user',
    dateTime: 'blog.dateTime',
  },
  {
    id: 3,
    image: blogImg5,
    title: 'blog.categoryTitle',
    content: 'blog.categoryContent',
    user: 'blog.user',
    dateTime: 'blog.dateTime',
  },
];

export const comments = [
  {
    id: 1,
    name: 'financial.markJacob',
    comment: 'blog.comment',
    time: 'blog.commentTime',
    user: blogUser1,
  },
  {
    id: 2,
    name: 'financial.markJacob',
    comment: 'blog.comment1',
    time: 'blog.commentTime',
    user: blogUser2,
  },
  {
    id: 3,
    name: 'financial.markJacob',
    comment: 'blog.comment',
    time: 'blog.commentTime',
    user: blogUser3,
  },
];

export const articles = [
  {
    id: 1,
    image: blogImg3,
    title: 'blog.categoryTitle',
    content: 'blog.categoryContent',
    user: 'blog.user',
    dateTime: 'blog.dateTime',
  },
  {
    id: 1,
    image: blogImg4,
    title: 'blog.categoryTitle',
    content: 'blog.categoryContent',
    user: 'blog.user',
    dateTime: 'blog.dateTime',
  },
];

export const blogsData = [
  {
    id: 1,
    image: blogImg3,
    title: 'blog.categoryTitle',
    content: 'blog.blogContent',
    user: 'blog.user',
    dateTime: 'blog.dateTime',
    showAd: true,
  },
  {
    id: 2,
    image: blogImg4,
    title: 'blog.categoryTitle',
    content: 'blog.categoryContent',
    user: 'blog.user',
    dateTime: 'blog.dateTime',
    showAd: true,
  },
  {
    id: 3,
    image: blogImg6,
    title: 'blog.categoryTitle',
    content: 'blog.blogContent1',
    user: 'blog.user',
    dateTime: 'blog.dateTime',
    showAd: false,
  },
  {
    id: 4,
    image: blogImg7,
    title: 'blog.categoryTitle',
    content: 'blog.blogContent2',
    user: 'blog.user',
    dateTime: 'blog.dateTime',
    showAd: false,
  },
  {
    id: 5,
    image: blogImg8,
    title: 'blog.categoryTitle',
    content: 'blog.blogContent3',
    user: 'blog.user',
    dateTime: 'blog.dateTime',
    showAd: false,
  },
  {
    id: 6,
    image: blogImg9,
    title: 'blog.categoryTitle',
    content: 'blog.blogContent4',
    user: 'blog.user',
    dateTime: 'blog.dateTime',
    showAd: false,
  },
];

export const tags = [
  {
    name: 'blog.global',
  },
  {
    name: 'blog.covid',
  },
  {
    name: 'blog.trendingnews',
  },
  {
    name: 'blog.timesnow',
  },
  {
    name: 'blog.application',
  },
];

export const newsData = [
  {
    id: 1,
    image: blogImg3,
    title: 'blog.categoryTitle',
    content: 'blog.blogContent',
    user: 'blog.user',
    dateTime: 'blog.dateTime',
  },
  {
    id: 2,
    image: blogImg4,
    title: 'blog.categoryTitle',
    content: 'blog.categoryContent',
    user: 'blog.user',
    dateTime: 'blog.dateTime',
  },
];

export const notificationData = [
  {
    image: blogImg3,
    title: 'blog.notificationTitle',
    dateTime: 'blog.notificationTime',
  },
  {
    image: blogImg4,
    title: 'blog.notificationTitle1',
    dateTime: 'blog.notificationTime1',
  },
  {
    image: blogImg4,
    title: 'blog.notificationTitle2',
    dateTime: 'blog.notificationTime2',
  },
  {
    image: notification,
    title: 'blog.notificationTitle3',
    dateTime: 'blog.notificationTime3',
  },
  {
    image: notification1,
    title: 'blog.notificationTitle4',
    dateTime: 'blog.notificationTime',
  },
  {
    image: notification2,
    title: 'blog.notificationTitle5',
    dateTime: 'blog.notificationTime1',
  },
  {
    image: notification3,
    title: 'blog.notificationTitle6',
    dateTime: 'blog.notificationTime2',
  },
  {
    image: notification,
    title: 'blog.notificationTitle6',
    dateTime: 'blog.notificationTime3',
  },
];

export const profileItems = [
  {
    name: 'cabBooking.editProfile',
    icon: <BlogProfile />,
    darkIcon: <BlogProfile color={appColors.white} />,
  },
  {
    name: 'drawer.Notification',
    icon: <NotificationIcon />,
    darkIcon: <NotificationIcon color={appColors.white} />,
  },
  {
    name: 'blog.security',
    icon: <LockIcon />,
    darkIcon: <LockIcon color={appColors.white} />,
  },
  {
    name: 'drawer.Langauge',
    icon: <LanguageIcon />,
    darkIcon: <LanguageIcon color={appColors.white} />,
  },
  {
    name: 'chatting.privacy',
    icon: <PrivacyIcon />,
    darkIcon: <PrivacyIcon color={appColors.white} />,
  },
  {
    name: 'drawer.Settings',
    icon: <SettingIcon />,
    darkIcon: <SettingIcon color={appColors.white} />,
  },
];

export const drawerItems = [
  {
    title: 'cabBooking.editProfile',
    icon: <BlogProfile />,
    darkIcon: <BlogProfile color={appColors.white} />,
    route: 'Profile',
  },
  {
    title: 'drawer.Notification',
    icon: <NotificationIcon />,
    darkIcon: <NotificationIcon color={appColors.white} />,
    route: 'Notification',
  },
  {
    title: 'blog.security',
    icon: <LockIcon />,
    darkIcon: <LockIcon color={appColors.white} />,
    route: '',
  },
  {
    title: 'drawer.Langauge',
    icon: <LanguageIcon />,
    darkIcon: <LanguageIcon color={appColors.white} />,
    route: '',
  },
  {
    title: 'chatting.privacy',
    icon: <PrivacyIcon />,
    darkIcon: <PrivacyIcon color={appColors.white} />,
    route: '',
  },
  {
    title: 'drawer.Settings',
    icon: <SettingIcon />,
    darkIcon: <SettingIcon color={appColors.white} />,
    route: '',
  },
];

export const bottomTabs = [
  {
    id: 0,
    name: 'bottomTab.home',
    icon: <BlogHomeIcon color={appColors.subTitle} />,
    darkIcon: <BlogHomeIcon color={appColors.white} />,
    screen: 'BlogHome',
    activeIcon: <BlogHomeIcon color={appColors.fontColor} />,
  },
  {
    id: 1,
    name: 'bottomTab.Search',
    icon: (
      <BlogSearchIcon width={'22'} height={'27'} color={appColors.subTitle} />
    ),
    darkIcon: (
      <BlogSearchIcon width={'22'} height={'27'} color={appColors.white} />
    ),
    screen: 'BlogSearch',
    activeIcon: (
      <BlogSearchIcon width={'22'} height={'27'} color={appColors.fontColor} />
    ),
  },
  {
    id: 2,
    name: 'blog.addPost',
    icon: <AddPostIcon color={appColors.subTitle} />,
    darkIcon: <AddPostIcon color={appColors.white} />,
    screen: 'AddPost',
    activeIcon: <AddPostIcon color={appColors.fontColor} />,
  },
  {
    id: 3,
    name: 'drawer.Notification',
    icon: (
      <NotificationIcon height={'27'} width={'22'} color={appColors.subTitle} />
    ),
    darkIcon: (
      <NotificationIcon height={'27'} width={'22'} color={appColors.white} />
    ),
    screen: 'Notification',
    activeIcon: (
      <NotificationIcon
        height={'27'}
        width={'22'}
        color={appColors.fontColor}
      />
    ),
  },
  {
    id: 4,
    name: 'bottomTab.Profile',
    icon: <BlogProfile height={'27'} color={appColors.subTitle} />,
    darkIcon: <BlogProfile height={'27'} color={appColors.white} />,
    screen: 'Profile',
    activeIcon: <BlogProfile height={'27'} color={appColors.fontColor} />,
  },
];
