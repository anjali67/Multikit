import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {t} from 'i18next';
import TextContentDivision from './textContentDivision';
import {ArrowDown} from '@assets/images/hotel_theme/svg/arrowDown';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function textContainer() {
  const [showText, setText] = useState(false);

  const {textRTLStyle, isDark} = useValues();

  return (
    <View
      style={[
        styles.main,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <TextContentDivision
        content={'hotelBooking.overView'}
        content1={'hotelBooking.location'}
        content2={'hotelBooking.reviews'}
        mainViewStyle={[
          styles.mainViewStyle,
          {backgroundColor: isDark ? appColors.blackColor : appColors.white},
        ]}
        textStyle={styles.textStyle}
        vertical={[
          styles.vertical,
          {backgroundColor: isDark ? appColors.darkTheme : appColors.gray},
        ]}
      />
      <View style={styles.mainContainer}>
        <Text
          style={[
            styles.title,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.reviewText,
            },
          ]}>
          {t('hotelBooking.hotelHeading')}
        </Text>
        <Text style={[styles.content, {textAlign: textRTLStyle}]}>
          {t('hotelBooking.content')}
        </Text>
        <Text
          style={[
            styles.content,
            styles.top,
            {opacity: showText ? null : 0.6, textAlign: textRTLStyle},
          ]}>
          {t('hotelBooking.content1')}
        </Text>
        <Text
          style={[
            styles.content,
            {
              opacity: showText ? null : 0.2,
              marginTop: 0,
              textAlign: textRTLStyle,
            },
          ]}>
          {t('hotelBooking.content2')}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setText(true);
          }}
          style={styles.arrowView}>
          <View style={styles.downArrow}>{!showText && <ArrowDown />}</View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
