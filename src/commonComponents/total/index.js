import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function Total(props) {
  const {viewRTLStyle, textRTLStyle, isDark,currSymbol} = useValues();
  return (
    <View style={[styles.mainView, props.mainStyle]}>
      <Text
        style={[
          styles.title,
          {
            color: props.color
              ? props.color
              : isDark
              ? appColors.white
              : appColors.black,
            textAlign: textRTLStyle,
            ...props.titleStyle,
          },
        ]}>
        {t(props.title)}
      </Text>
      <View style={[styles.dataView, {flexDirection: viewRTLStyle}]}>
        <Text style={styles.data}>{t('common.bagTotal')}</Text>
        <Text style={styles.data}>{currSymbol}{props.bagPrice}</Text>
      </View>
      <View style={[styles.dataView, {flexDirection: viewRTLStyle}]}>
        <Text style={styles.data}>{t('common.bagSavings')}</Text>
        <Text style={[styles.price, {color: appColors.lighrGreen}]}>
          {currSymbol}{props.savingsPrice}
        </Text>
      </View>
      <View
        style={[
          styles.dataView,
          styles.deliveryView,
          {flexDirection: viewRTLStyle},
        ]}>
        <Text style={styles.data}>{t('common.delivery')}</Text>
        <Text style={styles.data}>{currSymbol}{props.delivery}</Text>
      </View>
      <View style={[styles.amountView, {flexDirection: viewRTLStyle}]}>
        <Text
          style={[
            styles.amount,
            {color: isDark ? appColors.white : appColors.black},
          ]}>
          {t('common.totalAmount')}
        </Text>
        <Text
          style={[
            styles.amount,
            {color: isDark ? appColors.white : appColors.black},
          ]}>
          {currSymbol}{props.total}
        </Text>
      </View>
    </View>
  );
}
