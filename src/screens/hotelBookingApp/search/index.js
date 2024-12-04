import React from 'react';
import {View, ScrollView} from 'react-native';
import HomeHeader from '@commonComponents/homeHeader';
import {homelogo} from '@utils/images/images';
import {HotelBellNotification} from '@assets/images/hotel_theme/svg/bellnotification';
import {windowWidth} from '@theme/appConstant';
import {Drawer} from '@assets/images/hotel_theme/svg/drawer';
import {hotelStyle} from '../styles';
import {t} from 'i18next';
import TextInput from '@otherComponent/hotelBooking/auth/textInput';
import styles from './styles';
import PropertySection from '@otherComponent/hotelBooking/home/PropertySection';
import FilterSection from '@otherComponent/hotelBooking/home/filterSection';
import GradiantbtnView from '@otherComponent/hotelBooking/button';
import {hotelCategoryData} from '@utils/json/hotelBooking';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';

export default function hotelBookingSearch({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        hotelStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HomeHeader
        logoIcon={homelogo}
        notificationIcon={<HotelBellNotification />}
        logoImgeStyle={{width: windowWidth(102)}}
        navigation={navigation}
        drawer={<Drawer />}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={hotelStyle.mainView}>
          <TextInput
            label={t('hotelBooking.city')}
            placeholder={t('hotelBooking.london')}
          />
          <View style={styles.row}>
            <TextInput
              container={[styles.textInput, {width: windowWidth(215)}]}
              label={t('hotelBooking.checkInDate')}
              placeholder={t('hotelBooking.datePlaceholder')}
            />
            <TextInput
              container={styles.textInput}
              label={t('hotelBooking.checkOutDate')}
              placeholder={t('hotelBooking.date1Placeholder')}
            />
          </View>
          <TextInput
            label={t('hotelBooking.roomGuets')}
            placeholder={t('hotelBooking.guestsPlaceholder')}
          />
          <PropertySection data={hotelCategoryData} />
          <FilterSection />
          <View style={styles.top}></View>
          <GradiantbtnView
            onBtnPress={() => {}}
            btnTitle={t('bottomTab.Search')}
          />
        </View>
      </ScrollView>
    </View>
  );
}
