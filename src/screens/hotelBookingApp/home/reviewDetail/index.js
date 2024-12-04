import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import HeaderView from '@otherComponent/hotelBooking/headerView';
import {t} from 'i18next';
import {hotelStyle} from '../../styles';
import appColors from '@theme/appColors';
import BottomView from '../singleDetail/bottomView';
import ImpontantInformation from './impontantInformation';
import RecommendedSection from '@otherComponent/hotelBooking/home/recommendedSection';
import {hotelReviewData} from '@utils/json/hotelBooking';
import BookedData from './bookedData';
import {useValues} from '@App';

export default function reviewDetail({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        hotelStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <HeaderView
          grandiantColor={appColors.onBoardGradiant1}
          showBackArrow={true}
          title={t('hotelBooking.reviewDetail')}
        />
        <View style={hotelStyle.marginTop}></View>
        <RecommendedSection data={hotelReviewData} navigation={navigation} />
        <BookedData />
        <ImpontantInformation />
      </ScrollView>
      <View
        style={[
          hotelStyle.bottomContainerView,
          {backgroundColor: isDark ? appColors.blackColor : appColors.white},
        ]}>
        <BottomView
          onBtnPress={() => {
            navigation.navigate('GuestDetails');
          }}
          rowStyle={{right: 8}}
          bottomText={'hotelBooking.perNight'}
          textStyle={styles.text}
          title={'otp.Continue'}
          content={'hotelBooking.roomName'}
          btnView={styles.btnView}
        />
      </View>
    </View>
  );
}
