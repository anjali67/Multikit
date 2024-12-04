import {View, Text} from 'react-native';
import React from 'react';
import {t} from 'i18next';
import styles from '../totalOrder/styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function OrderAddress() {
  const {isDark, textRTLStyle, isRTL} = useValues();
  return (
    <View style={styles.mainContainer}>
      <Text
        style={[
          styles.title,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.black,
          },
        ]}>
        {t('ecommerce.orderShipped')}
      </Text>
      <Text
        style={[
          styles.data,
          styles.addressText,
          {textAlign: textRTLStyle, width: isRTL ? '100%' : '90%'},
        ]}>
        {t('ecommerce.orderAddress')}
      </Text>
      <View style={styles.blank}></View>
      <Text
        style={[
          styles.title,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.black,
          },
        ]}>
        {t('orderDetailPage.paymentMethod')}
      </Text>
      <Text style={[styles.data, {textAlign: textRTLStyle}]}>
        {t('ecommerce.googleUpi')}
      </Text>
    </View>
  );
}
