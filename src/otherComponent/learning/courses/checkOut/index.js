import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import cartStyle from '../cart/styles';
import Background from '@otherComponent/learning/home/background';
import {windowHeight} from '@theme/appConstant';
import Header from '@otherComponent/learning/home/header';
import {t} from 'i18next';
import Searchbar from '../../searchBar';
import {ArrowDown} from '@assets/images/hotel_theme/svg/arrowDown';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import PaymentList from './paymentList';
import GradiantBtn from '@otherComponent/learning/courses/gradiantBtn';
import CheckOutBtn from '../cart/checkOutBtn';
import TotalSummary from '../../summary';
import appFonts from '@theme/appFonts';

export default function checkOut({navigation}) {
  const {isDark, textRTLStyle} = useValues();
  return (
    <View
      style={[
        cartStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={cartStyle.paddingBottom}>
        <View>
          <Background
            image={{height: windowHeight(104)}}
            content={<Header showArrowIcon headerTitle={'nft.checkOut'} />}
          />
          <Text
            style={[
              cartStyle.titleStyle,
              {
                marginBottom: 0,
                marginTop: 25,
                marginHorizontal: 15,
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.learningBtn,
              },
            ]}>
            {t('learning.billingAddress')}:
          </Text>
          <Searchbar
            placeholder={t('learning.country')}
            inputStyle={{right: 24}}
            leftIcon={<></>}
            rightIcon={
              <ArrowDown strokeWidth={'1.3'} color={appColors.learningBtn} />
            }
            containerStyle={{marginTop: 0, bottom: 10}}
          />
          <Searchbar
            placeholder={t('learning.state')}
            inputStyle={{right: 24}}
            leftIcon={<></>}
            rightIcon={
              <ArrowDown strokeWidth={'1.3'} color={appColors.learningBtn} />
            }
            containerStyle={{marginTop: 0, bottom: 14}}
          />
          <View style={cartStyle.center}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                cartStyle.buttonStyle,
                {backgroundColor: isDark ? appColors.darkTheme : '#EBEEEF'},
              ]}>
              <Text
                style={[
                  cartStyle.btn,
                  {
                    fontFamily: appFonts.InterSemiBold,
                    color: isDark ? appColors.white : appColors.learningBtn,
                  },
                ]}>
                {t('learning.saveDetails')}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              cartStyle.divider,
              {backgroundColor: isDark ? appColors.darkTheme : '#F0F2F3'},
            ]}></View>
          <Text
            style={[
              cartStyle.titleStyle,
              {
                marginBottom: 0,
                marginTop: 25,
                marginHorizontal: 15,
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.learningBtn,
              },
            ]}>
            {t('foodProfile.payments')}:
          </Text>
          <PaymentList />
          <View
            style={[
              cartStyle.divider,
              {
                marginTop: 15,
                backgroundColor: isDark ? appColors.darkTheme : '#F0F2F3',
              },
            ]}></View>
          <TotalSummary />
        </View>
      </ScrollView>
      <GradiantBtn
        gradinatBtnStyle={{height: windowHeight(52), bottom: windowHeight(20)}}
        onBtnPress={() => {
          navigation.navigate('CourseTab');
        }}
        navigation={navigation}
        content={<CheckOutBtn />}
      />
    </View>
  );
}
