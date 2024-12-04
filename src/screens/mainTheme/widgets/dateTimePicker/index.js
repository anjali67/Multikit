import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import {t} from 'i18next';
import DatePicker from './datePicker';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function dateTimePicker({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <WidgetsBg
        navigation={navigation}
        title={t('mainTheme.DateTimePicker')}
        subContent={t('mainTheme.dateTimepickerContent')}
        content={
          <View>
            <DatePicker />
          </View>
        }
      />
    </View>
  );
}
