import React from 'react';
import {View} from 'react-native';
import HeaderView from '@otherComponent/hotelBooking/headerView';
import HotelBookSection from '@otherComponent/hotelBooking/hotelBookSection';
import {hotelStyle} from '../styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function hotelBookings({navigation}) {
  const {isDark} = useValues();

  return (
    <View
      style={[
        hotelStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HeaderView
        showBackArrow={true}
        grandiantColor={appColors.onBoardGradiant1}
        ShowserachView={true}
        title={'hotelBooking.bookings'}
        navigation={navigation}
      />
      <HotelBookSection />
    </View>
  );
}
