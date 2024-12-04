import React from 'react';
import {View} from 'react-native';
import {ultimateGoals} from '@utils/json/fitness';
import MultipleCheckBox from '@otherComponent/fitness/multipleCheckbox';
import TextContentView from '@otherComponent/fitness/stepperSlider/textContent';
import fitnessStyle from '../../style';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function goals() {
  const {isDark} = useValues();
  return (
    <View
      style={[
        fitnessStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <TextContentView
        title={'fitness.goalsTitle'}
        content={'fitness.goalsContent'}
      />
      <MultipleCheckBox data={ultimateGoals} />
    </View>
  );
}
