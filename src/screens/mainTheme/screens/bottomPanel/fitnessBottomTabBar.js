import React from 'react';
import {View, Image} from 'react-native';
import appColors from '@theme/appColors';
import styles from '../../../../bottomTab/style/styles';
import {useValues} from '@App';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {t} from 'i18next';
import CommonView from './commonView';

import FitnessTab from '../../../../bottomTab/fitnessTab/fitnessTab';

import {
  fitnessActiveGym,
  fitnessHome,
  fitnessGym,
  fitnessReport,
  fitnessUser,
  fitnessActiveHome,
  fitnessActiveReport,
  fitnessActiveUser,
} from '@utils/images/images';

const Tab = createMaterialTopTabNavigator();

export default function fitnessBottomTabBar() {
  const {viewRTLStyle, isDark} = useValues();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColors.white,
      }}>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBar={props => <FitnessTab {...props} />}
        screenOptions={{
          swipeEnabled: false,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={CommonView}
          tabBarLabel={false}
          options={{
            tabBarLabel: t('bottomTab.home'),
            tabBarIcon: () => (
              <Image style={styles.bottomTabIcon} source={fitnessHome} />
            ),
            activeTabBarIcon: () => (
              <Image style={styles.bottomTabIcon} source={fitnessActiveHome} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Exercise"
          component={CommonView}
          tabBarLabel={false}
          options={{
            tabBarLabel: t('bottomTab.home'),
            tabBarIcon: () => (
              <Image style={styles.bottomTabIcon} source={fitnessGym} />
            ),
            activeTabBarIcon: () => (
              <Image style={styles.bottomTabIcon} source={fitnessActiveGym} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Reports"
          component={CommonView}
          tabBarLabel={false}
          options={{
            tabBarLabel: t('bottomTab.home'),
            tabBarIcon: () => (
              <Image style={styles.bottomTabIcon} source={fitnessReport} />
            ),
            activeTabBarIcon: () => (
              <Image
                style={styles.bottomTabIcon}
                source={fitnessActiveReport}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={CommonView}
          tabBarLabel={false}
          options={{
            tabBarLabel: t('bottomTab.home'),
            tabBarIcon: () => (
              <Image style={styles.bottomTabIcon} source={fitnessUser} />
            ),
            activeTabBarIcon: () => (
              <Image style={styles.bottomTabIcon} source={fitnessActiveUser} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
