import React from 'react';
import {BlogHomeIcon} from '@assets/images/blog_theme/svg/home';
import {BlogSearchIcon} from '@assets/images/blog_theme/svg/search';
import {NotificationIcon} from '@assets/images/blog_theme/svg/notification';
import {AddPostIcon} from '@assets/images/blog_theme/svg/add';
import {BlogProfile} from '@assets/images/blog_theme/svg/user';
import BlogTab from '../../../../bottomTab/blogTab/blogTab';
import {t} from 'i18next';
import {useValues} from '@App';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View} from 'react-native';
import appColors from '@theme/appColors';
import CommonView from './commonView';

const Tab = createMaterialTopTabNavigator();

export default function blogTabbBar({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColors.white,
      }}>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBar={props => <BlogTab {...props} />}
        screenOptions={{
          swipeEnabled: false,
        }}>
        <Tab.Screen
          name="Home"
          component={CommonView}
          options={{
            tabBarLabel: t('bottomTab.home'),
            tabBarIcon: () => (
              <BlogHomeIcon
                color={isDark ? appColors.white : appColors.subTitle}
              />
            ),
            activeTabBarIcon: () => (
              <BlogHomeIcon
                color={isDark ? appColors.white : appColors.fontColor}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={CommonView}
          options={{
            tabBarLabel: t('bottomTab.Search'),
            tabBarIcon: () => (
              <BlogSearchIcon
                width={'22'}
                height={'27'}
                color={isDark ? appColors.white : appColors.subTitle}
              />
            ),
            activeTabBarIcon: () => (
              <BlogSearchIcon
                width={'22'}
                height={'27'}
                color={isDark ? appColors.white : appColors.fontColor}
              />
            ),

            headerShown: false,
          }}
        />
        <Tab.Screen
          name="AddPost"
          component={CommonView}
          options={{
            tabBarLabel: t('blog.addPost'),
            tabBarIcon: () => (
              <AddPostIcon
                color={isDark ? appColors.white : appColors.subTitle}
              />
            ),
            activeTabBarIcon: () => (
              <AddPostIcon
                color={isDark ? appColors.white : appColors.fontColor}
              />
            ),

            headerShown: false,
          }}
        />
        <Tab.Screen
          name="NotificationIcon"
          component={CommonView}
          options={{
            tabBarLabel: t('drawer.Notification'),
            tabBarIcon: () => (
              <NotificationIcon
                height={'27'}
                width={'22'}
                color={isDark ? appColors.white : appColors.subTitle}
              />
            ),
            activeTabBarIcon: () => (
              <NotificationIcon
                height={'27'}
                width={'22'}
                color={isDark ? appColors.white : appColors.fontColor}
              />
            ),

            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={CommonView}
          options={{
            tabBarLabel: t('bottomTab.Profile'),
            tabBarIcon: () => (
              <BlogProfile
                height={'27'}
                color={isDark ? appColors.white : appColors.subTitle}
              />
            ),
            activeTabBarIcon: () => (
              <BlogProfile
                height={'27'}
                color={isDark ? appColors.white : appColors.fontColor}
              />
            ),

            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
