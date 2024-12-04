import React from 'react';
import {View, Text} from 'react-native';
import {hotelStyle} from '../../styles';
import HeaderView from '@otherComponent/hotelBooking/headerView';
import {t} from 'i18next';
import TextInput from '@otherComponent/hotelBooking/auth/textInput';
import styles from './styles';
import {DownArrow} from '@assets/images/common/svg/downArrow';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';
import GradiantBorder from '@otherComponent/hotelBooking/gradiantBorder';
import BottomView from '../singleDetail/bottomView';
import {useValues} from '@App';

export default function guestDetails({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        hotelStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <HeaderView
        grandiantColor={appColors.onBoardGradiant1}
        showBackArrow={true}
        title={t('hotelBooking.guestDetails')}
      />
      <View style={styles.blankView}></View>
      <View style={{marginHorizontal: windowWidth(20)}}>
        <View style={styles.row}>
          <View
            style={[
              styles.mainView,
              styles.row,
              {
                backgroundColor: isDark
                  ? appColors.darkTheme
                  : appColors.reviewsBg,
              },
            ]}>
            <Text
              style={[
                styles.text,
                {color: isDark ? appColors.white : appColors.reviewText},
              ]}>
              {t('hotelBooking.mr')}
            </Text>
            <DownArrow height={'20'} color={appColors.reviewText} />
          </View>
          <TextInput
            label={t('signUp.Full Name')}
            placeholder={t('hotelBooking.enterName')}
            container={styles.container}
          />
        </View>
        <TextInput
          label={t('hotelBooking.emailId')}
          placeholder={t('hotelBooking.enterEmail')}
          container={styles.top}
        />
        <TextInput
          label={t('hotelBooking.contactNumber')}
          placeholder={t('hotelBooking.enterContactNumber')}
        />

        <GradiantBorder
          title={'hotelBooking.addGuest'}
          linearGradient={styles.linearGradient}
          gradiant={'#7232d9'}
        />
      </View>
      <View
        style={[
          hotelStyle.bottomContainerView,
          {backgroundColor: isDark ? appColors.blackColor : appColors.white},
        ]}>
        <BottomView
          onBtnPress={() => {
            navigation.navigate('HotelPayment');
          }}
          rowStyle={{right: 8}}
          bottomText={'hotelBooking.perNight'}
          title={'ecommerce.payment'}
          content={'hotelBooking.roomName'}
          btnView={styles.btnView}
          text={styles.fontsize}
        />
      </View>
    </View>
  );
}
