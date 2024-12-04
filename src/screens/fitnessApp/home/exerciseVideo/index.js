import React from 'react';
import {View, Text} from 'react-native';
import fitnessStyle from '../../style';
import HeaderBg from '../weekly/headerBg';
import WeekComponent from '../weekly/weekComponent';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function exerciseVideo({navigation}) {
  const {isDark} = useValues();

  return (
    <View
      style={[
        fitnessStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HeaderBg
        navigation={navigation}
        title={'fitness.exerciseTitle'}
        content={'7 X 3'}
      />
      <WeekComponent navigation={navigation} />
    </View>
  );
}
