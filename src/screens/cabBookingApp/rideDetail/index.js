import React from 'react';
import {View, Text, FlatList, ImageBackground, Image} from 'react-native';
import HomeView from '@otherComponent/cabBooking/homeView';
import {User} from '@assets/images/grocery_assets/svg/user';
import styles from './styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {cabBg} from '@utils/images/images';
import {useValues} from '@App';
import {rideData} from '@utils/json/cabBooking';
import RideRow from './rideRow';
import {dividerImg} from '@utils/images/images';
import BtnView from '@otherComponent/cabBooking/btnView';

export default function rideDetails({navigation}) {
  const {currSymbol, currValue, viewRTLStyle, isDark, textRTLStyle} =
    useValues();
  return (
    <HomeView
      contentContainerStyle={styles.contentContainerStyle}
      content={
        <View>
          <View style={styles.textView}>
            <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
              <Text style={[styles.title,{color: isDark ? appColors.white : appColors.cabText}]}>{t('cabBooking.rideDetails')}</Text>
              <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                <User color={appColors.black} />
                <Text style={[styles.name,{  color: isDark ? appColors.white : appColors.cabText}]}>{t('cabBooking.mySelf')}</Text>
              </View>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={rideData}
              renderItem={({item}) => {
                return (
                  <View style={[styles.rowView, {flexDirection: viewRTLStyle,  backgroundColor: isDark ? appColors.darkTheme : appColors.white}]}>
                    <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                      <ImageBackground
                        resizeMode="contain"
                        source={cabBg}
                        style={styles.baground}>
                        <Image source={item.image} style={styles.image} />
                      </ImageBackground>
                      <View style={styles.textContainer}>
                        <Text style={[styles.text, {textAlign: textRTLStyle, color: isDark ? appColors.white : appColors.cabText}]}>
                          {t(item.title)}
                        </Text>
                        <Text
                          style={[styles.content, {textAlign: textRTLStyle, color: isDark ? appColors.white : appColors.foodContent}]}>
                          {t(item.content)}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.price}>
                      {item.time} {t('cabBooking.min')}
                    </Text>
                  </View>
                );
              }}
            />
            <View style={styles.blankView}></View>
            <RideRow
              title={t('cabBooking.estimatedFare')}
              content={currSymbol + currValue * 15}
            />
            <RideRow title={t('cabBooking.capacity')} content={'1-4'} />
            <RideRow
              title={t('cabBooking.Coupon')}
              content={t('cabBooking.applyCoupon')}
              color={'#FFBB12'}
            />
            <Image source={dividerImg} style={styles.divider} />
            <RideRow
              title={t('cabBooking.paypalAmount')}
              content={currSymbol + currValue * 15}
              name={styles.nameStyle}
              rowStyle={styles.rowStyle}
            />
          </View>
          <View style={styles.blankView}></View>
          <BtnView
            onBtnPress={() => {
              navigation.navigate('CabPayment');
            }}
            btnTitle={t('ecommerce.payNoW')}
          />
        </View>
      }
    />
  );
}
