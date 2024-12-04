import React from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import styles from '../styles';
import {useValues} from '@App';
import {t} from 'i18next';
import {StarIcon} from '@assets/images/hotel_theme/svg/ratingStar';
import {Map} from '@assets/images/hotel_theme/svg/map';
import appColors from '@theme/appColors';

export default function categoryRow(props) {
  const {viewRTLStyle, textRTLStyle, isDark, currSymbol, currValue, isRTL} =
    useValues();
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        numColumns={2}
        inverted={isRTL ? true : false}
        showsHorizontalScrollIndicator={false}
        data={props.data}
        renderItem={({item}) => {
          return (
            <View style={styles.main}>
              <View>
                <Image source={item.image} style={styles.img} />
                <View style={[styles.rateView, {flexDirection: viewRTLStyle}]}>
                  <View
                    style={[
                      styles.rowContainer,
                      {
                        flexDirection: viewRTLStyle,
                        backgroundColor: isDark
                          ? appColors.darkTheme
                          : appColors.white,
                      },
                    ]}>
                    <View style={styles.star}>
                      <StarIcon />
                    </View>
                    <Text
                      style={[
                        styles.rate,
                        {
                          color: isDark
                            ? appColors.white
                            : appColors.reviewText,
                        },
                      ]}>
                      {item.rate}
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={[styles.title, {textAlign: textRTLStyle}]}>
                {t(item.title)}
              </Text>
              <View style={[styles.rowView, {flexDirection: viewRTLStyle}]}>
                <Map color={appColors.label} height={'22'} />
                <Text style={[styles.address, {textAlign: textRTLStyle}]}>
                  {t(item.address)}
                </Text>
              </View>
              <Text style={[styles.price, {textAlign: textRTLStyle}]}>
                {currSymbol}
                {currValue * item.price}/ {t('hotelBooking.night')}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
