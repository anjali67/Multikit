import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import BookingRow from './bookingRow';

export default function bookingDetails(props) {
  const {viewRTLStyle} = useValues();
  return (
    <View
      style={[styles.mainView, props.mainView, {flexDirection: viewRTLStyle}]}>
      <BookingRow
        name={t('hotelBooking.checkIn')}
        date={t('hotelBooking.bookingDate')}
        time={'9 a.m - 10 a.m.'}
      />
      <View style={styles.lineView}>
        <View style={styles.horizontalLine}></View>
      </View>
      <BookingRow
        name={t('hotelBooking.checkOut')}
        date={t('hotelBooking.bookingDate1')}
        time={'11 a.m - 12 p.m.'}
      />
    </View>
  );
}
