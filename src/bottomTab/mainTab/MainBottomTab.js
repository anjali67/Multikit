import {Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FullApp from '@screens/mainTheme/fullApps';
import Element from '@screens/mainTheme/elements';
import Screen from '@screens/mainTheme/screens';
import Widget from '@screens/mainTheme/widgets';
import {fontSizes, windowHeight} from '@theme/appConstant';
import {FullApps, Elements, Screens, Widgets} from '@utils/icons';
import appColors from '@theme/appColors';
import {
  activeFullapp,
  activeElements,
  activeWidgets,
  activeScreens,
} from '@utils/images/images';
import styles from '../style/styles';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

export default function MainBottomTab() {
  const {isDark} = useValues();
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="FullApp"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: appColors.green,
        tabBarInactiveTintColor: appColors.gray,
        tabBarStyle: {
          height: '9%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isDark ? appColors.darkTheme : appColors.white,
        },

        tabBarLabelStyle: {
          fontSize: fontSizes.FONT16,
          fontFamily: appFonts.MontserratMedium,
          bottom: windowHeight(8),
        },
      }}>
      <Tab.Screen
        name="FullApp"
        component={FullApp}
        options={{
          tabBarLabel: t('mainTheme.fullApps'),
          tabBarIcon: ({size, focused, color}) => {
            return focused ? (
              <Image source={activeFullapp} style={styles.iconStyle} />
            ) : (
              <FullApps color={appColors.gray} style={styles.top} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Element"
        component={Element}
        options={{
          tabBarLabel: t('mainTheme.elements'),
          tabBarIcon: ({size, focused, color}) => {
            return focused ? (
              <Image source={activeElements} style={styles.iconStyle} />
            ) : (
              <Elements style={styles.top} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Screen"
        component={Screen}
        options={{
          tabBarLabel: t('mainTheme.Screens'),
          tabBarIcon: ({size, focused, color}) => {
            return focused ? (
              <Image source={activeScreens} style={styles.iconStyle} />
            ) : (
              <Screens style={styles.top} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Widget"
        component={Widget}
        options={{
          tabBarLabel: t('mainTheme.widgets'),
          tabBarIcon: ({size, focused, color}) => {
            return focused ? (
              <Image source={activeWidgets} style={styles.iconStyle} />
            ) : (
              <Widgets style={styles.top} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
