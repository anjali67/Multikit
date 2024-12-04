import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles';
import {DoubleCheck} from '@assets/images/hotel_theme/svg/doubleCheck';
import {dividerImg} from '@utils/images/images';
import BookingDetails from '@otherComponent/hotelBooking/singleDetails/bookingDetails';
import {windowHeight} from '@theme/appConstant';
import ReviewRow from '../revireRow';
import {t} from 'i18next';
import {useValues} from '@App';

export default function bookedData() {
  const {textRTLStyle} = useValues();
  return (
    <View>
      <Text
        style={[
          styles.headingTitle,
          {marginTop: windowHeight(5), textAlign: textRTLStyle},
        ]}>
        {t('hotelBooking.bookingDetails')}
      </Text>
      <BookingDetails mainView={styles.mainView} />
      <Text style={[styles.headingTitle, {textAlign: textRTLStyle}]}>
        {t('hotelBooking.guestDetails')}
      </Text>
      <ReviewRow
        title={'hotelBooking.guestContent'}
        content={'foodCart.edit'}
        color={appColors.onBoardGradiant}
      />
      <Text style={[styles.headingTitle, {textAlign: textRTLStyle}]}>
        {t('hotelBooking.roomDetails')}
      </Text>
      <ReviewRow
        contentStyle={styles.mainStyle}
        title={'hotelBooking.roomName'}
      />
      <ReviewRow
        title={'hotelBooking.breakfastIncluded'}
        icon={<DoubleCheck />}
      />
      <ReviewRow title={'hotelBooking.roomContent'} icon={<DoubleCheck />} />
      <Text
        style={[
          styles.headingTitle,
          {textAlign: textRTLStyle, marginBottom: windowHeight(4)},
        ]}>
        {t('orderDetailPage.paymentDetails')}
      </Text>
      <ReviewRow
        contentStyle={styles.mainStyle}
        title={'ecommerce.bestPrice'}
        price={25}
        rowView={{marginTop: 0}}
      />
      <ReviewRow
        contentStyle={styles.mainStyle}
        color={'#008E1F'}
        title={'ecommerce.totalDiscount'}
        price={5}
        rowView={{marginTop: 0}}
      />
      <ReviewRow
        contentStyle={styles.mainStyle}
        title={'ecommerce.taxesServices'}
        price={3}
        rowView={{marginTop: 0}}
      />
      <Image source={dividerImg} style={styles.img} />
      <ReviewRow
        priceStyle={styles.priceStyle}
        contentStyle={styles.contentStyle}
        textStyle={windowHeight(10)}
        title={'ecommerce.totalAmountPaid'}
        price={23}
        rowView={{marginTop: 0}}
      />
    </View>
  );
}
