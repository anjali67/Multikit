import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import {t} from 'i18next';
import {useValues} from '@App';
import {fontSizes} from '@theme/appConstant';

export default function checkOutBtn() {
  const {viewRTLStyle, isDark, currSymbol, currValue, isRTL} = useValues();
  return (
    <View
      style={[
        styles.rowView,
        styles.centerView,
        {flexDirection: viewRTLStyle, paddingHorizontal: isRTL ? 40 : 20},
      ]}>
      <View>
        <Text
          style={[
            styles.titleText,
            {color: '#9DACB1', fontSize: fontSizes.FONT18HALF},
          ]}>
          {t('nft.total')}:
        </Text>
        <Text style={styles.titleText}>
          {currSymbol}
          {(currValue * 151).toFixed(2)}
        </Text>
      </View>
      <View style={styles.verticalLine}></View>
      <Text style={styles.titleText}>
        {t('learning.completeCheckout')}{' '}
        <Text style={styles.titleText}>{'>>'}</Text>
      </Text>
    </View>
  );
}
