import React from 'react';
import {View, Text} from 'react-native';
import style from '../personalDetails/styles';
import fitnessStyle from '../../style';
import DropDown from '@otherComponent/fitness/dropdown';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '../../../../theme/appColors';

export default function goal() {
  const {isDark} = useValues();
  return (
    <View
      style={[
        fitnessStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={style.margin}>
        <Text
          style={[
            style.title,
            {color: isDark ? appColors.white : appColors.fontColor},
          ]}>
          {t('fitness.goalQue')}
        </Text>
        <DropDown title={'fitness.weight'} />
      </View>
    </View>
  );
}
