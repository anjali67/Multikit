import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {ClockOutline} from '@assets/images/common/svg/clockoutline';
import {Distance} from '@assets/images/food_ordering_theme/svg/distance';
import {star} from '@utils/images/images';
import {discount} from '@utils/images/images';
import {useNavigation} from '@react-navigation/native';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import { darkDiscount } from '@utils/images/images';

export default function FeaturedRenderItem(props) {
  const navigation = useNavigation();
  const {viewRTLStyle, isRTL, isDark, textRTLStyle} = useValues();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        navigation.navigate('Restaurant', {foodItem: props.item});
      }}
      style={[styles.mainView, props.mainView,{backgroundColor:isDark ? appColors.blackColor :  appColors.white}]}>
      <ImageBackground
        borderTopLeftRadius={5}
        borderTopRightRadius={5}
        source={props.item.image}
        style={[styles.image, props.image]}>
        <View>
          <View style={styles.mainContainer}>
            {props.item.bestSeller && (
              <Text
                style={[
                  styles.boxContainer,
                  styles.bestSeller,
                  props.boxContainer,
                  {backgroundColor:isDark ? appColors.blackColor : appColors.white,color:isDark ? appColors.white : appColors.foodSecondary  }
                ]}>
                {t(props.item.bestSeller)}
              </Text>
            )}
            <View
              style={[
                styles.rowContainer,
                styles.ratingView,
                {flexDirection: viewRTLStyle,backgroundColor:isDark ? appColors.blackColor : appColors.white},
              ]}>
              <Image source={star} style={styles.star} />
              <Text style={[styles.rating, props.rating,{color:isDark ? appColors.white : appColors.foodSecondary}]}>
                {t(props.item.rating)}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text
          style={[styles.title, props.titleStyle, {textAlign: textRTLStyle,color:isDark ? appColors.white : appColors.foodSecondary}]}>
          {t(props.item.title)}
        </Text>
        <Text
          style={[
            styles.content,
            props.contentStyle,
            {textAlign: textRTLStyle},
          ]}>
          {t(props.item.content)}
        </Text>
        <View
          style={[styles.row, styles.marginTop, {flexDirection: viewRTLStyle}]}>
          <View
            style={[
              styles.row,
              isRTL ? styles.rightView : styles.leftView,
              {flexDirection: viewRTLStyle},
            ]}>
            <ClockOutline
              color={isDark ? appColors.white : 'black'}
              strokeWidth={props.strokeWidth ? props.strokeWidth : '1.7'}
              width={props.clockWidth ? props.clockWidth : '15'}
              height={props.clockHeight ? props.clockHeight : '23'}
            />
            <Text
              style={[
                styles.time,
                props.timeStyle,
                {marginRight: isRTL ? 0 : null,color:isDark ? appColors.white : appColors.foodSecondary},
              ]}>
              {t(props.item.time)}
            </Text>
          </View>
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <View style={styles.dotStyle}></View>
            <Distance />
            <Text style={[styles.time, styles.fontsize, props.timeStyle,{color:isDark ? appColors.white : appColors.foodSecondary}]}>
              {t(props.item.distance)}
            </Text>
          </View>
        </View>
        {!props.discountSection && (
          <View
            style={[
              styles.row,
              styles.marginTop,
              {flexDirection: viewRTLStyle},
            ]}>
          {isDark ?   <Image
              
              source={darkDiscount}
              style={[styles.offerImg, props.offerImg]}
            />  :   <Image
              
              source={discount}
              style={[styles.offerImg, props.offerImg]}
            />}
            <Text style={[styles.offer, props.offer]}>
              {t(props.item.offer)}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
