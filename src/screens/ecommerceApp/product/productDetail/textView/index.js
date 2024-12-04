import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';

export default function TextView() {
  const {currSymbol, currValue, viewRTLStyle, isRTL, textRTLStyle, isDark} =
    useValues();
  return (
    <View style={[styles.mainView, {flexDirection: viewRTLStyle}]}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <Text
          style={[
            styles.title,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.ecommerceFont,
            },
          ]}>
          {t('ecommerce.productContent')}
        </Text>
      </View>
      <View>
        <Text style={styles.price}>
          {currSymbol}
          {(currValue * 25).toFixed(2)}
        </Text>
        <Text style={[styles.priceText, {right: isRTL ? 20 : null}]}>
          {currSymbol}
          {(currValue * 28).toFixed(2)}
        </Text>
      </View>
    </View>
  );
}
