import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {hotelImg} from '@utils/images/images';
import appColors from '@theme/appColors';
import {ShareIcon} from '@assets/images/common/svg/shareIcon';
import {ArrowIcon} from '@assets/images/hotel_theme/svg/arrow';
import {HeartLineIcon} from '@assets/images/hotel_theme/svg/heart_line';
import LinearGradient from 'react-native-linear-gradient';
import {StarIcon} from '@assets/images/hotel_theme/svg/ratingStar';
import {t} from 'i18next';
import {useValues} from '@App';
import {ArrowRight} from '@assets/images/common/svg/arrowright';

export default function topSection(props) {
  const {viewRTLStyle, textRTLStyle, isRTL, isDark} = useValues();
  return (
    <View>
      <View>
        <Image source={hotelImg} style={styles.img} />
        <View style={[styles.innerView, {flexDirection: viewRTLStyle}]}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles.circleView,
              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.white,
              },
            ]}>
            {isRTL ? (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => props.navigation.goBack()}>
                <ArrowRight
                  color={isDark ? appColors.white : appColors.reviewText}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => props.navigation.goBack()}>
                <ArrowIcon
                  color={isDark ? appColors.white : appColors.reviewText}
                />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <View
              style={[
                styles.circleView,
                {
                  backgroundColor: isDark
                    ? appColors.blackColor
                    : appColors.white,
                },
              ]}>
              <HeartLineIcon />
            </View>
            <View
              style={[
                styles.circleView,
                {
                  backgroundColor: isDark
                    ? appColors.blackColor
                    : appColors.white,
                },
              ]}>
              <ShareIcon
                height={'15'}
                width={'15'}
                strokeWidth={1}
                color={isDark ? appColors.white : appColors.blackColor}
              />
            </View>
          </View>
        </View>
      </View>
      <LinearGradient
        colors={[appColors.onBoardGradiant, appColors.onBoardGradiant1]}
        style={styles.gradiantView}
        start={{x: 1, y: 0.2}}
        end={{x: 1, y: 1}}>
        <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
          <Text style={[styles.text, {textAlign: textRTLStyle}]}>
            {t('hotelBooking.theFrescoHotel')}
          </Text>
          <StarIcon />
          <Text style={styles.textStyle}>4.5</Text>
        </View>
        <Text style={[styles.detailText, {textAlign: textRTLStyle}]}>
          {t('hotelBooking.hotelDetail')}
        </Text>
      </LinearGradient>
    </View>
  );
}
