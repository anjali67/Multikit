import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {bookGif} from '@utils/images/images';
import style from '../style';
import appColors from '@theme/appColors';

export default function LearningSplash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LearningOnBoarding');
    }, 3000);
  }, []);
  return (
    <View
      style={[
        style.center,
        style.container,
        {backgroundColor: appColors.learningBg},
      ]}>
      <Image tintColor={appColors.white} source={bookGif} style={style.image} />
    </View>
  );
}
