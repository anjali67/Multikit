import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Background from '@otherComponent/learning/home/background';
import cartStyle from './styles';
import Header from '@otherComponent/learning/home/header';
import {windowHeight} from '@theme/appConstant';
import {t} from 'i18next';
import CartListItem from './cartList';
import {Offer} from '@assets/images/learning_theme/svg/offer';
import SearchBar from '../../searchBar';
import appColors from '@theme/appColors';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import {useValues} from '@App';
import TotalSummary from '../../summary';
import GradiantBtn from '@otherComponent/learning/courses/gradiantBtn';
import CheckOutBtn from '../cart/checkOutBtn';
import {BackArrow} from '@assets/images/common/svg/backArrow';

export default function cart({navigation}) {
  const {isDark, currValue, textRTLStyle, isRTL} = useValues();
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
            content={<Header showArrowIcon headerTitle={'bottomTab.Cart'} />}
          />
          <View style={cartStyle.main}>
            <Text
              style={[
                cartStyle.titleStyle,
                {
                  textAlign: textRTLStyle,
                  color: isDark ? appColors.white : appColors.learningBtn,
                },
              ]}>
              {t('orderSummary.OrderSummary')}:
            </Text>
            <CartListItem crossStyle={{right: 0}} />
          </View>
          <View
            style={[
              cartStyle.divider,
              {backgroundColor: isDark ? appColors.darkTheme : '#F0F2F3'},
            ]}></View>
          <Text
            style={[
              cartStyle.titleStyle,
              cartStyle.main,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.learningBtn,
              },
            ]}>
            {t('foodCart.Coupons')}:
          </Text>
          <SearchBar
            containerStyle={cartStyle.containerStyle}
            labelStyle={{marginBottom: 0}}
            inputStyle={cartStyle.inputStyle}
            leftIcon={<Offer />}
            rightIcon={
              isRTL ? (
                <BackArrow />
              ) : (
                <RightArrow
                  strokeWidth={'1.2'}
                  color={appColors.learningBtn}
                  width={'22'}
                  height={'22'}
                />
              )
            }
            placeholder={t('foodCart.ApplyCoupons')}
            placeholderTextColor={appColors.learningBtn}
          />
          <View style={cartStyle.blankView}></View>
          <View
            style={[
              cartStyle.divider,
              {backgroundColor: isDark ? appColors.darkTheme : '#F0F2F3'},
            ]}></View>
          <TotalSummary />
          <View style={cartStyle.blankView}></View>
        </View>
      </ScrollView>
      <GradiantBtn
        gradinatBtnStyle={{height: windowHeight(52), bottom: windowHeight(20)}}
        onBtnPress={() => {
          navigation.navigate('CheckOut');
        }}
        navigation={navigation}
        content={<CheckOutBtn />}
      />
    </View>
  );
}
