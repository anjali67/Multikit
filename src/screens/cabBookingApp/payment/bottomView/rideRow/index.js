import React from 'react';
import {View, Image, ImageBackground, Text} from 'react-native';
import styles from '../../styles';
import {cab1, cabBg} from '@utils/images/images';
import {useValues} from '@App';
import {t} from 'i18next';
import appColors from '../../../../../theme/appColors';

export default function rideRow() {
  const {currSymbol, currValue, viewRTLStyle, isDark, textRTLStyle} =
    useValues();
  return (
    <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
      <ImageBackground
        resizeMode="contain"
        source={cabBg}
        style={styles.baground}>
        <Image source={cab1} style={styles.imageStyle} />
      </ImageBackground>
      <View style={styles.textView}>
        <Text style={[styles.title, {textAlign: textRTLStyle, color: isDark ? appColors.white : appColors.cabText}]}>
          {t('cabBooking.mini')}
        </Text>
        <Text style={[styles.content, {textAlign: textRTLStyle}]}>
          {t('common.totalAmount')}: {currSymbol}
          {currValue * 15}
        </Text>
      </View>
    </View>
  );
}
