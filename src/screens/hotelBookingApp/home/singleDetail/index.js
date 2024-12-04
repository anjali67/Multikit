import React from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import TopSection from './topSection';
import TextContainer from './textContainer';
import {hotelStyle} from '../../styles';
import {t} from 'i18next';
import AminitiesSection from './amenitiesSection';
import {divider} from '@utils/images/images';
import appColors from '@theme/appColors';
import BookingDetails from '@otherComponent/hotelBooking/singleDetails/bookingDetails';
import {locationMap} from '@utils/images/images';
import styles from './styles';
import TextContentDivision from './textContainer/textContentDivision';
import BookingDescription from './bookingDescription';
import {windowHeight} from '@theme/appConstant';
import ReviewSection from './reviewSection';
import BottomView from './bottomView';
import {useValues} from '@App';

export default function singleDetailPage({navigation}) {
  const {textRTLStyle, isDark} = useValues();
  return (
    <View
      style={[
        hotelStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <TopSection navigation={navigation} />
        <TextContainer />
        <Text
          style={[
            styles.headingTitle,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.reviewText,
            },
          ]}>
          {t('hotelBooking.amenities')}
        </Text>
        <AminitiesSection />
        <Image tintColor={appColors.gray} source={divider} style={styles.img} />
        <Text
          style={[
            styles.headingTitle,
            styles.top,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.reviewText,
            },
          ]}>
          {t('hotelBooking.bookingDetails')}
        </Text>
        <BookingDetails />
        <Image tintColor={appColors.gray} source={divider} style={styles.img} />
        <Text
          style={[
            styles.headingTitle,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.reviewText,
            },
          ]}>
          {t('hotelBooking.location')}
        </Text>
        <Text style={[styles.content, {textAlign: textRTLStyle}]}>
          {t('hotelBooking.hotelDetail')}
        </Text>
        <Image source={locationMap} style={styles.image} />
        <TextContentDivision
          content={'hotelBooking.transport'}
          content1={'hotelBooking.attraction'}
          content2={'hotelBooking.food'}
          mainViewStyle={styles.mainViewStyle}
        />
        <BookingDescription />
        <Image
          tintColor={appColors.gray}
          source={divider}
          style={[styles.img, {marginVertical: windowHeight(15)}]}
        />
        <Text
          style={[
            styles.headingTitle,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.reviewText,
            },
          ]}>
          {t('hotelBooking.review')}
        </Text>
        <ReviewSection />
      </ScrollView>
      <View
        style={[
          hotelStyle.bottomContainerView,
          {backgroundColor: isDark ? appColors.blackColor : appColors.white},
        ]}>
        <BottomView
          onBtnPress={() => {
            navigation.navigate('ChooseRoom');
          }}
          bottomText={'hotelBooking.bottomText'}
          title={'hotelBooking.selectRoom'}
          price={20}
          content={'hotelBooking.taxesAndFees'}
        />
      </View>
    </View>
  );
}
