import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {masterCard} from '@utils/images/images';
import {t} from 'i18next';

import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function PaymentMethodView() {
  const {viewRTLStyle, textRTLStyle, isRTL, isDark} = useValues();
  return (
    <View style={styles.paymentView}>
      <Text
        style={[
          styles.addTxt,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.groceryBtn,
          },
        ]}>
        {t('orderDetailPage.paymentMethod')}
      </Text>
      <View style={[styles.number, {flexDirection: viewRTLStyle}]}>
        <Image source={masterCard} style={styles.masterCardImg} />
        <Text
          style={[
            styles.cardNumber,
            {color: isDark ? appColors.white : appColors.black},
          ]}>
          {t('orderDetail.cardNumber')}{' '}
        </Text>
      </View>
    </View>
  );
}
