import React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '@screens/learningApp/home';
import Search from '@screens/learningApp/search';
import MyCourses from '@screens/learningApp/myCourses';
import WhishList from '@screens/learningApp/whishlist';
import Account from '@screens/learningApp/account';
import {LearningHome} from '@assets/images/learning_theme/svg/home';
import {LearningSearch} from '@assets/images/learning_theme/svg/search';
import {LearningPlay} from '@assets/images/learning_theme/svg/play';
import {LearningWishlist} from '@assets/images/learning_theme/svg/bookmark';
import {LearningUser} from '@assets/images/learning_theme/svg/user';
import TabButton from './learningTab';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '../../../App';

const Tab = createMaterialTopTabNavigator();

export default function LearningTabBar() {
  const {isDark} = useValues();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      
      }}>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBar={props => <TabButton {...props} />}
        screenOptions={{
          swipeEnabled: false,
        }}>
        <Tab.Screen
          name={t('bottomTab.home')}
          component={Home}
          options={{
            tabBarIcon: () => (
              <LearningHome
                color={isDark ? appColors.white : appColors.learningBtn}
              />
            ),
            activeTabBarIcon: () => <LearningHome color={appColors.white} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={t('bottomTab.Search')}
          component={Search}
          options={{
            tabBarIcon: () => (
              <LearningSearch
                color={isDark ? appColors.white : appColors.learningBtn}
                strokeWidth={'1.1'}
                height={'22'}
                width={'22'}
              />
            ),
            activeTabBarIcon: () => (
              <LearningSearch strokeWidth={'1.1'} color={appColors.white} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={t('learning.myCourses')}
          component={MyCourses}
          options={{
            tabBarIcon: () => (
              <LearningPlay
                height={'24'}
                width={'24'}
                color={isDark ? appColors.white : appColors.learningBtn}
                strokeWidth={'1.1'}
              />
            ),
            activeTabBarIcon: () => (
              <LearningPlay
                height={'24'}
                width={'24'}
                color={appColors.white}
                strokeWidth={'1.1'}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={t('ecommerce.whishlist')}
          component={WhishList}
          options={{
            tabBarIcon: () => (
              <LearningWishlist
                color={isDark ? appColors.white : appColors.learningBtn}
                strokeWidth={'1.1'}
              />
            ),
            activeTabBarIcon: () => (
              <LearningWishlist color={appColors.white} strokeWidth={'1.1'} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={t('bottomTab.Profile')}
          component={Account}
          options={{
            tabBarIcon: () => (
              <LearningUser
                color={isDark ? appColors.white : appColors.learningBtn}
                strokeWidth={'1.1'}
              />
            ),
            activeTabBarIcon: () => (
              <LearningUser strokeWidth={'1.1'} color={appColors.white} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
