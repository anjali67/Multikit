import React from 'react';
import {View, TextInput} from 'react-native';
import styles from '../styles';
import {Sliders} from '@assets/images/hotel_theme/svg/sliders';
import {HotelSearchIcon} from '@assets/images/hotel_theme/svg/hotelSearch';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function SearchView(props) {
  const {viewRTLStyle, textRTLStyle, isDark} = useValues();
  return (
    <View
      style={[
        styles.searchView,
        {
          borderWidth: isDark ? 1 : 0,
          backgroundColor: isDark ? appColors.blackColor : appColors.white,
          borderColor: isDark ? appColors.darkTheme : null,
        },
      ]}>
      <View style={[styles.innerView, {flexDirection: viewRTLStyle}]}>
        <View style={styles.top}>
          <HotelSearchIcon
            height={'21'}
            width={'19'}
            color={appColors.darkTheme}
          />
        </View>
        <TextInput
          style={[
            styles.textInput,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.reviewText,
            },
          ]}
          placeholder={t('hotelBooking.serachHere')}
          placeholderTextColor={appColors.placeholder}
        />
        <View style={styles.top}>{props.icon ? props.icon : <Sliders />}</View>
      </View>
    </View>
  );
}
