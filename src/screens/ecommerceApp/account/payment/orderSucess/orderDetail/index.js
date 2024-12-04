import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';
import {t} from 'i18next';
import appColors from '@theme/appColors';

export default function OrderDetails() {
  const {textRTLStyle, isRTL, isDark} = useValues();
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Text
          style={[
            styles.subTitle,
            {
              textAlign: textRTLStyle,
              right: isRTL ? 10 : null,
              color: isDark ? appColors.white : appColors.ecommerceFont,
            },
          ]}>
          {t('ecommerce.yourOrder')}
        </Text>
        <Text
          style={[
            styles.emailReceipt,
            {textAlign: textRTLStyle, right: isRTL ? 10 : null},
          ]}>
          {t('ecommerce.emailReceipt')}
        </Text>
        <Text
          style={[
            styles.subTitle,
            {
              marginTop: windowHeight(18),
              textAlign: textRTLStyle,
              right: isRTL ? 10 : null,
              color: isDark ? appColors.white : appColors.ecommerceFont,
            },
          ]}>
          {t('ecommerce.orderShip')}
        </Text>
        <Text
          style={[
            styles.discription,
            {textAlign: textRTLStyle},
            isRTL ? 0 : {width: '60%'},
          ]}>
          {t('ecommerce.address')}
        </Text>
        <Text
          style={[
            styles.subTitle,
            {
              marginTop: windowHeight(12),
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.ecommerceFont,
            },
          ]}>
          {t('orderDetailPage.paymentMethod')}
        </Text>
        <Text style={[styles.discription, {textAlign: textRTLStyle}]}>
          {t('ecommerce.googleUpi')}
        </Text>
      </View>
    </View>
  );
}
