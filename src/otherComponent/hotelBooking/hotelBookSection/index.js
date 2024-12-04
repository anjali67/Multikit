import React from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import styles from './styles';
import {hotelBookingData} from '@utils/json/hotelBooking';
import {t} from 'i18next';
import StarRating from '@commonComponents/starRating';
import {useValues} from '@App';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';

export default function hotelBookSection() {
  const {currSymbol, currValue, viewRTLStyle, textRTLStyle, isRTL, isDark} =
    useValues();
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={hotelBookingData}
        renderItem={({index, item}) => {
          return (
            <View
              style={[
                styles.mainView,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.reviewsBg,
                  borderRadius: windowHeight(8),
                },
              ]}>
              <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                <Text style={styles.dateText}>
                  {t('hotelBooking.datePlaceholder')}
                </Text>
                <LinearGradient
                  colors={['rgba(3, 99, 218, 0.1)', 'rgba(85, 70, 203, 0.1)']}
                  style={[
                    styles.bookedView,
                    {paddingVertical: windowHeight(2)},
                  ]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}>
                  <View>
                    <Text style={styles.bookedText}>
                      {t('hotelBooking.booked')}
                    </Text>
                  </View>
                </LinearGradient>
              </View>
              <View style={styles.border}></View>
              <View
                style={[
                  styles.rowContainer,
                  styles.top,
                  {flexDirection: viewRTLStyle},
                ]}>
                <View
                  style={[
                    styles.rowContainer,
                    styles.top,
                    {flexDirection: viewRTLStyle},
                  ]}>
                  <Image source={item.image} style={styles.imageStyle} />
                  <View style={styles.textContainer}>
                    <Text
                      style={[
                        styles.name,
                        {
                          textAlign: textRTLStyle,
                          color: isDark
                            ? appColors.white
                            : appColors.reviewText,
                        },
                      ]}>
                      {t(item.name)}
                    </Text>
                    <Text style={styles.content}>{t(item.address)}</Text>
                    <View
                      style={[
                        styles.starRatingView,
                        {flexDirection: viewRTLStyle},
                      ]}>
                      <StarRating size={15} />
                      <Text
                        style={[
                          styles.rating,
                          {
                            color: isDark
                              ? appColors.white
                              : appColors.reviewText,
                          },
                        ]}>
                        {t('hotelBooking.giveRatings')}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.border}></View>
              <View
                style={[
                  styles.row,
                  {marginTop: windowHeight(10), flexDirection: viewRTLStyle},
                ]}>
                <View
                  style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
                  <Text style={styles.total}>
                    {t('hotelBooking.totalPrice')}{' '}
                  </Text>
                  <Text style={styles.price}>
                    {''}
                    {currSymbol}
                    {(currValue * item.price).toFixed(2)}
                    {isRTL && ' '}
                  </Text>
                </View>
                <View>
                  <LinearGradient
                    style={{borderRadius: windowHeight(22)}}
                    colors={[
                      appColors.onBoardGradiant,
                      appColors.onBoardGradiant1,
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}>
                    <View
                      style={[styles.bookedView]}
                      activeOpacity={0.9}
                      onPress={() => {}}>
                      <Text style={styles.viewDetails}>
                        {t('ecommerce.viewDetails')}
                      </Text>
                    </View>
                  </LinearGradient>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
