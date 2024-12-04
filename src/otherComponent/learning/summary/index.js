import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import appFonts from '@theme/appFonts';

export default function totalSummary() {
  const {viewRTLStyle, textRTLStyle, isDark, currSymbol, currValue} =
    useValues();
  return (
    <View style={styles.mainView}>
      <Text
        style={[
          styles.title,
          {
            color: isDark ? appColors.white : appColors.black,
            textAlign: textRTLStyle,
          },
        ]}>
        {t('learning.summary')}
      </Text>
      <View style={[styles.dataView, {flexDirection: viewRTLStyle}]}>
        <Text
          style={[
            styles.data,
            {color: isDark ? appColors.white : appColors.learningBtn},
          ]}>
          {t('learning.originalPrice')}:{' '}
        </Text>
        <Text
          style={[
            styles.data,
            {color: isDark ? appColors.white : appColors.learningBtn},
          ]}>
          {currSymbol}
          {(currValue * 150).toFixed(2)}
        </Text>
      </View>
      <View style={[styles.dataView, {flexDirection: viewRTLStyle}]}>
        <Text
          style={[
            styles.data,
            {color: isDark ? appColors.white : appColors.learningBtn},
          ]}>
          {t('learning.discounts')}:{' '}
        </Text>
        <Text
          style={[
            styles.price,
            {color: '#CF0000', fontFamily: appFonts.InterMedium},
          ]}>
          - {currSymbol}
          {(currValue * 50).toFixed(2)}
        </Text>
      </View>
      <View
        style={[
          styles.dataView,
          styles.deliveryView,
          {flexDirection: viewRTLStyle},
        ]}>
        <Text
          style={[
            styles.data,
            {color: isDark ? appColors.white : appColors.learningBtn},
          ]}>
          {t('learning.tax')}:{' '}
        </Text>
        <Text
          style={[
            styles.data,
            {color: isDark ? appColors.white : appColors.learningBtn},
          ]}>
          + {currSymbol}
          {(currValue * 20).toFixed(2)}
        </Text>
      </View>
      <View style={[styles.amountView, {flexDirection: viewRTLStyle}]}>
        <Text
          style={[
            styles.amount,
            {color: isDark ? appColors.white : appColors.black},
          ]}>
          {t('nft.total') + ':'}
        </Text>
        <Text
          style={[
            styles.amount,
            {color: isDark ? appColors.white : appColors.black},
          ]}>
          {currSymbol}
          {(currValue * 120).toFixed(2)}
        </Text>
      </View>
    </View>
  );
}
