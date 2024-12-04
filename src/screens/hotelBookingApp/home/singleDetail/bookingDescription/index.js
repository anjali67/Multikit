import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import BookingTitle from './bookingTitle';
import BookingStationRow from './bookingStation';
import {Airplane} from '@assets/images/hotel_theme/svg/airplane';
import {windowHeight} from '@theme/appConstant';
import {Train} from '@assets/images/hotel_theme/svg/train';

export default function bookingDescription() {
  return (
    <View>
      <View style={styles.mainContainer}>
        <BookingTitle
          icon={<Train />}
          bookingStationName={'hotelBooking.closestStation'}
        />

        <BookingStationRow
          stationName={'hotelBooking.equitiMetro'}
          distance={'hotelBooking.5km'}
        />
        <BookingStationRow
          stationName={'hotelBooking.duBaiStation'}
          distance={'hotelBooking.20km'}
        />
      </View>
      <View style={[styles.margin, {marginTop: windowHeight(-5)}]}>
        <BookingTitle
          icon={<Airplane />}
          bookingStationName={'hotelBooking.closestAirPoty'}
        />

        <BookingStationRow
          stationName={'hotelBooking.dubaiAirport'}
          distance={'hotelBooking.8.0km'}
        />
      </View>
    </View>
  );
}
