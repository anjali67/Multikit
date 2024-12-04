import React from 'react';
import {View} from 'react-native';
import fitnessStyle from '../../style';
import {losingWeightData} from '@utils/json/fitness';
import TextContentView from '../../../../otherComponent/fitness/stepperSlider/textContent';
import MultipleCheckBox from '@otherComponent/fitness/multipleCheckbox';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function losingWeight() {
  const {isDark} = useValues();
  return (
    <View
      style={[
        fitnessStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <TextContentView
        title={'fitness.losingWeightTitle'}
        content={'fitness.losingWeightContent'}
      />
      <MultipleCheckBox data={losingWeightData} />
    </View>
  );
}
