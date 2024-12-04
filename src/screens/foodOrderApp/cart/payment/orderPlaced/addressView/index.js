import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../styles';
import {scooter} from '@utils/images/images';
import {t} from 'i18next';
import {useValues} from '@App';

export default function AddressView() {
  const {viewRTLStyle, isDark, textRTLStyle} = useValues();
  return (
    <View style={[styles.rowView, {flexDirection: viewRTLStyle}]}>
      <Image source={scooter} style={styles.imageStyle} />
      <View style={styles.topContent}>
        <Text style={[styles.title, {textAlign: textRTLStyle,color:isDark ? appColors.white : appColors.foodSecondary}]}>
          {t('orderPlaced.arriving')}
          <Text style={styles.content}> {t('orderPlaced.15minis')}</Text>
        </Text>
        <Text style={[styles.contentStyle, {textAlign: textRTLStyle}]}>
          {t('orderPlaced.content')}
        </Text>
      </View>
    </View>
  );
}
