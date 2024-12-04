import React from 'react';
import {View, Text, Image} from 'react-native';
import {hotelStyle} from '../../../styles';
import styles from './styles';
import {checkImg} from '@utils/images/images';
import {t} from 'i18next';
import PaymentRow from './paymentRow';
import {windowWidth} from '@theme/appConstant';
import GradiantbtnView from '@otherComponent/hotelBooking/button';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function paymentSucess({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        hotelStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={styles.center}>
        <Image source={checkImg} style={styles.img} />
        <View>
          <Text style={styles.title}>{t('hotelBooking.paymentSucess')}</Text>
          <PaymentRow
            checkIn={t('hotelBooking.checkin')}
            checkOut={t('hotelBooking.checkout')}
            checkIntime={t('hotelBooking.bookingDate')}
            checkOutTime={t('hotelBooking.bookingDate1')}
            textStyle={{width: windowWidth(137)}}
            contentStyle={{width: windowWidth(137)}}
          />
          <PaymentRow
            checkIn={t('hotelBooking.checkInTime')}
            checkOut={t('hotelBooking.CheckoutTime')}
            checkIntime={t('hotelBooking.time')}
            checkOutTime={t('hotelBooking.time1')}
            contentStyle={{width: windowWidth(137)}}
          />
          <PaymentRow
            checkIn={t('orderDetailPage.address')}
            checkOut={t('hotelBooking.paymentMode')}
            checkIntime={t('hotelBooking.paymentAddress')}
            checkOutTime={t('hotelBooking.paymentModeContent')}
            width={windowWidth(190)}
            contentStyle={styles.contentStyle}
            left={windowWidth(40)}
          />
        </View>
        <View style={styles.container}></View>
        <GradiantbtnView
          onBtnPress={() => {
            navigation.navigate('HotelLogin');
          }}
          btnTitle={t('hotelBooking.downloadInvoice')}
          gradiant={appColors.onBoardGradiant1}
        />
      </View>
    </View>
  );
}
