import React from 'react';
import {View, Text} from 'react-native';
import RangeSlider from '@otherComponent/hotelBooking/rangeSlider';
import mainStyle from '../../style';
import WidgetsBg from '@otherComponent/mainTheme/widgets/background';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '../../../../theme/appColors';

export default function rangeSlider({navigation}) {
  const {viewRTLStyle, isDark} = useValues();
  return (
    <View
      style={[
        mainStyle.container,
        {backgroundColor: isDark ? appColors.blackColor : appColors.grayLight},
      ]}>
      <WidgetsBg
        navigation={navigation}
        title={t('mainTheme.rangeSLider')}
        subContent={t('mainTheme.rangeSliderContent')}
        content={
          <View style={[mainStyle.margin, {marginHorizontal: 10}]}>
            <Text
              style={[
                mainStyle.title,
                {color: isDark ? appColors.white : appColors.fontColor},
              ]}>
              {t('hotelBooking.pricing')}
            </Text>
            <RangeSlider />
          </View>
        }
      />
    </View>
  );
}
