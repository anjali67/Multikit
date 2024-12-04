import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {homelogo} from '@utils/images/images';
import HomeHeader from '@commonComponents/homeHeader';
import {windowWidth} from '@theme/appConstant';
import {HotelBellNotification} from '@assets/images/hotel_theme/svg/bellnotification';
import {Drawer} from '@assets/images/hotel_theme/svg/drawer';
import {hotelStyle} from '../styles';
import SearchTextInput from '@otherComponent/ecommerce/searchTextInput';
import styles from './styles';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import HotelCategory from '@otherComponent/hotelBooking/home/hotelCategory';
import {hotelCategoryData} from '@utils/json/hotelBooking';
import HotelSection from '@otherComponent/hotelBooking/home/hotelSection';
import OfferSection from '@otherComponent/hotelBooking/home/offerSection';
import RecommendedSection from '@otherComponent/hotelBooking/home/recommendedSection';
import {recommendedData} from '@utils/json/hotelBooking';
import {useValues} from '@App';

export default function hotelBookingHome({navigation}) {
  const {textRTLStyle, isDark} = useValues();
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
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <View>
          <SearchTextInput
            container={hotelStyle.container}
            inputContainer={[
              hotelStyle.inputContainer,
              {
                backgroundColor: isDark
                  ? appColors.darkTheme
                  : appColors.reviewsBg,
              },
            ]}
            notShowSerachIcon
            placeholderTextColor={
              isDark ? appColors.white : appColors.reviewText
            }
            placeholder={t('hotelBooking.serachHere')}
            textInput={[
              hotelStyle.textInput,
              {color: isDark ? appColors.white : appColors.reviewText},
            ]}
          />
        </View>
        <HotelCategory
          data={hotelCategoryData}
          onPress={() => {
            navigation.navigate('CategorySection');
          }}
        />
        <Text
          style={[
            styles.title,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.reviewText,
            },
          ]}>
          {t('hotelBooking.hotelContent')}
        </Text>
        <HotelSection navigation={navigation} />
        <OfferSection />
        <Text
          style={[
            styles.title,
            styles.top,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.reviewText,
            },
          ]}>
          {t('ecommerce.recommended')}
        </Text>
        <RecommendedSection navigation={navigation} data={recommendedData} />
      </ScrollView>
    </View>
  );
}
