import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {homesection} from '@utils/images/images';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';

export default function homeBanner() {
  const {viewRTLStyle, textRTLStyle, currSymbol, currValue} = useValues();
  return (
    <View style={styles.center}>
      <Image source={homesection} style={styles.image} />
      <View style={styles.mainContainer}>
        <Text style={[styles.text, {textAlign: textRTLStyle}]}>
          {t('financial.welcomeText')}
        </Text>
        <Text style={[styles.text, styles.top, {textAlign: textRTLStyle}]}>
          {t('financial.cardContent1')}
        </Text>
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          <View style={styles.balance}>
            <Text style={styles.textStyle}>
              {t('financial.availableBalance')}: {currSymbol}{' '}
              {(currValue * 2562.5).toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity style={styles.addView} activeOpacity={0.9}>
            <Text style={styles.add}>{t('financial.add')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
