import React, {useEffect} from 'react';
import {View} from 'react-native';
import AuthBg from '@otherComponent/fitness/authBg';

export default function FitnessSplash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('FitnessonBoarding');
    }, 1000);
  }, []);
  return (
    <View>
      <AuthBg subTitle={'fitness.onBoardingContent'} />
    </View>
  );
}
