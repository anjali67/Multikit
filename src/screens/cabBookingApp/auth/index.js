import React from 'react';
import {View, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CabLogin from './login';
import CabSignup from './signup';
import {t} from 'i18next';
import {MyTabBar} from './MyTabBar';
import {cabLogo} from '@utils/images/images';
import styles from './styles';
import cabStyle from '../style';
import appColors from '@theme/appColors';
import {useValues} from '@App';

const Tab = createMaterialTopTabNavigator();

export default function cabAuthScreen() {
  const {isDark} = useValues();
  return (
    <View style={[cabStyle.mainContainer, {backgroundColor: isDark ? appColors.blackColor : appColors.white}]}>
      <View style={cabStyle.center}>
        <Image tintColor={isDark && appColors.white} source={cabLogo} style={styles.image} />
      </View>
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
        }}
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen
          name={t('ecommerceOnBoarding.login')}
          component={CabLogin}
        />
        <Tab.Screen name={t('signUp.signUp')} component={CabSignup} />
      </Tab.Navigator>
    </View>
  );
}
