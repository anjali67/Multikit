import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {ClockOutline} from '@assets/images/common/svg/clockoutline';
import {Distance} from '@assets/images/food_ordering_theme/svg/distance';
import {star} from '@utils/images/images';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function NearByRestaurants(props) {
  const {viewRTLStyle, textRTLStyle, isRTL,isDark} = useValues();
  return (
    <View style={styles.container}>
      {props.data.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            props.navigation.navigate('Restaurant', {foodItem: item});
          }}
          style={[styles.mainView,{backgroundColor:isDark ? appColors.blackColor : appColors.white }]}>
          <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
            <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={[styles.title, {textAlign: textRTLStyle,color:isDark ? appColors.white : appColors.foodSecondary}]}>
                  {t(item.title)}
                </Text>
                <Text style={[styles.content, {textAlign: textRTLStyle}]}>
                  {t(item.content)}
                </Text>
                <View
                  style={[
                    styles.row,
                    styles.marginTop,
                    {flexDirection: viewRTLStyle},
                  ]}>
                  <View
                    style={[
                      styles.row,
                      isRTL ? styles.rightView : styles.leftView,
                      {flexDirection: viewRTLStyle},
                    ]}>
                    <ClockOutline
                      color={isDark ? appColors.white : 'black'}
                      strokeWidth={'1.7'}
                      width={'15'}
                      height={'22'}
                    />
                    <Text style={[styles.time,{color: isDark ? appColors.white : appColors.foodSecondary}]}>{t(item.time)}</Text>
                  </View>
                  <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                    <View style={styles.dotStyle}></View>
                    <Distance height={'23'} />
                    <Text
                      style={[
                        styles.time,
                        styles.fontsize,
                        {textAlign: textRTLStyle,color: isDark ? appColors.white : appColors.foodSecondary},
                      ]}>
                      {t(item.distance)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.row,
                styles.ratingView,
                {flexDirection: viewRTLStyle,backgroundColor: isDark ? appColors.darkTheme
                   :  appColors.foodPrimary},
              ]}>
              <Image source={star} style={[styles.clock, {right: 2}]} />
              <Text style={[styles.rating,{color: isDark ? appColors.white : appColors.foodSecondary}]}>{t(item.rating)}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
