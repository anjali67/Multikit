import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {t} from 'i18next';
import {Cross} from '@assets/images/common/svg/cross';
import appColors from '../../../../theme/appColors';
import {hotelStyle} from '@screens/hotelBookingApp/styles';
import RangeSlider from '../../rangeSlider';
import PropertySection from '../../home/PropertySection';
import FilterSection from '../../home/filterSection';
import GradiantbtnView from '@otherComponent/hotelBooking/button';
import {useValues} from '@App';
import {hotelCategoryData} from '@utils/json/hotelBooking';
import StarRating from './starRating';

export default function FilterModal({navigation}) {
  const {viewRTLStyle, textRTLStyle, isDark} = useValues();
  return (
    <View
      style={[
        hotelStyle.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View
        style={[
          styles.headerView,
          {
            flexDirection: viewRTLStyle,
            backgroundColor: isDark
              ? appColors.blackColor
              : appColors.reviewsBg,
          },
        ]}>
        <Text
          style={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.reviewText},
          ]}>
          {t('hotelBooking.filters')}
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('CategorySection')}>
          <Cross
            height={'20'}
            width={'20'}
            color={isDark ? appColors.white : appColors.fontColor}
            strokeWidth={'1.7'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.margin}>
        <Text
          style={[
            styles.text,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.reviewText,
            },
          ]}>
          {t('hotelBooking.pricing')}
        </Text>
        <RangeSlider />
        <View style={[styles.margin, styles.topView]}>
          <PropertySection data={hotelCategoryData} />
          <FilterSection linearGradientStyle={styles.linearGradientStyle} />
          <StarRating />
        </View>
      </View>
      <View
        style={[
          hotelStyle.bottomContainerView,
          {backgroundColor: isDark ? appColors.blackColor : appColors.white},
        ]}>
        <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
          <Text style={styles.resetText}>{t('hotelBooking.reset')}</Text>
          <View>
            <GradiantbtnView
              onBtnPress={() => {}}
              btnTitle={t('hotelBooking.applyFilter')}
              btnStyle={[styles.btnView]}
              btnText={[styles.btnText]}
              gradiant={appColors.onBoardGradiant1}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
