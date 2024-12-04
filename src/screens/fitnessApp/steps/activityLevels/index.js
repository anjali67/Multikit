import React from 'react';
import {View, Text} from 'react-native';
import fitnessStyle from '../../style';
import TextContentView from '../../../../otherComponent/fitness/stepperSlider/textContent';
import MultipleCheckBox from '@otherComponent/fitness/multipleCheckbox';
import {activityLevelsData} from '@utils/json/fitness';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function activityLevels() {
  const {isDark} = useValues();
  return (
    <View
      style={[
        fitnessStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <TextContentView
        title={'fitness.activityLevelTitle'}
        content={'fitness.activityContent'}
      />
      <MultipleCheckBox data={activityLevelsData} />
    </View>
  );
}
