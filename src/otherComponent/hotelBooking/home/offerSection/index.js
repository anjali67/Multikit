import React from 'react';
import {View, Text, Image} from 'react-native';
import {offerBg} from '@utils/images/images';
import {t} from 'i18next';
import styles from './styles';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function offerSection() {
  const {viewRTLStyle, textRTLStyle, isRTL} = useValues();
  return (
    <View style={styles.container}>
      <View>
        <Image source={offerBg} style={styles.image} />
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              {
                textAlign: textRTLStyle,
                right: isRTL ? windowWidth(45) : 0,
                width: windowWidth(290),
              },
            ]}>
            {t('hotelBooking.offerTitle')}
          </Text>
          <Text style={[styles.content, {textAlign: textRTLStyle}]}>
            {t('hotelBooking.offerContent')}
          </Text>
          <View
            style={[
              styles.row,
              {
                width: windowWidth(217),
                flexDirection: viewRTLStyle,
              },
            ]}>
            {isRTL ? (
              <Text style={[styles.coupon, styles.title]}>
                {' '}
                : {t('hotelBooking.useCode')}{' '}
              </Text>
            ) : (
              <Text style={[styles.coupon, styles.title]}>
                {t('hotelBooking.useCode')}:{' '}
              </Text>
            )}
            <Text style={styles.couponContent}>
              
              {t('hotelBooking.cupon')}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
