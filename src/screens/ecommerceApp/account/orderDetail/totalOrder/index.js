import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function TotalOrder(props) {
  const {viewRTLStyle, textRTLStyle, isDark, currSymbol, currValue} =
    useValues();
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
        {t('common.Order Details')}
        <Text>:</Text>
      </Text>
      <View
        style={[
          styles.dataView,
          props.dataContainer,
          {flexDirection: viewRTLStyle},
        ]}>
        <Text style={styles.data}>{t('ecommerce.bestPrice')}</Text>
        <Text
          style={[
            styles.price,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}>
          {currSymbol}
          {(currValue * 25).toFixed(2)}
        </Text>
      </View>
      <View
        style={[
          styles.dataView,
          props.dataContainer,
          {flexDirection: viewRTLStyle},
        ]}>
        <Text style={styles.data}>{t('ecommerce.totalDiscount')}</Text>
        <Text style={[styles.price, {color: '#008E1F'}]}>
          -{currSymbol}
          {(currValue * 5).toFixed(2)}
        </Text>
      </View>
      <View
        style={[
          styles.dataView,
          props.dataContainer,
          {flexDirection: viewRTLStyle},
        ]}>
        <Text style={styles.data}>{t('ecommerce.taxesServices')}</Text>
        <Text
          style={[
            styles.price,
            {color: isDark ? appColors.white : appColors.ecommerceFont},
          ]}>
          {currSymbol}
          {(currValue * 3).toFixed(2)}
        </Text>
      </View>
      <View
        style={[
          styles.amountView,
          props.dataContainer,
          {flexDirection: viewRTLStyle},
        ]}>
        <Text
          style={[
            styles.data,
            props.paymentText,
            {color: isDark ? appColors.white : appColors.black},
          ]}>
          {t('ecommerce.totalAmountPaid')}
        </Text>
        <Text
          style={[
            styles.price,
            {color: isDark ? appColors.white : appColors.forgotFont},
          ]}>
          {currSymbol}
          {(currValue * 23).toFixed(2)}
        </Text>
      </View>
    </View>
  );
}
