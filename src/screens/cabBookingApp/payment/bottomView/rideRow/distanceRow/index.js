import {t} from 'i18next';
import React from 'react';
import {View, Text} from 'react-native';
import {MapIcon} from '@assets/images/cab_theme/svg/map';
import {ClockOutline} from '@assets/images/common/svg/clockoutline';
import appColors from '@theme/appColors';
import styles from '../../../styles';
import {useValues} from '@App';

export default function distanceRow(props) {
  const {viewRTLStyle, isDark, textRTLStyle} = useValues();
  return (
    <View style={[styles.row, props.rowView, {flexDirection: viewRTLStyle}]}>
      <View
        style={[
          styles.singleRow,
          props.mainView,
          {flexDirection: viewRTLStyle},
        ]}>
        <MapIcon />
        <Text style={[styles.name,{ color: isDark ? appColors.white : appColors.cabText}]}>{t('NearbyArr.nachoDistance')}</Text>
      </View>

      <View
        style={[
          styles.leftView,
          props.mainView,
          {flexDirection: viewRTLStyle},
        ]}>
        <View style={props.containerView}>
          <ClockOutline color={isDark ? appColors.white : appColors.cabText} height={'22'} width={'16'} />
        </View>
        <Text style={[styles.name,{ color: isDark ? appColors.white : appColors.cabText}]}>{t('cabBooking.approx')}</Text>
      </View>
    </View>
  );
}
