import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Heart from '@assets/images/drawer/heart';
import appColors from '@theme/appColors';
import {Cart} from '@assets/images/ecommerce_theme/svg/cart';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function AddCartView(props) {
  const {isDark, viewRTLStyle, isRTL} = useValues();
  return (
    <View
      style={[
        styles.row,
        {
          flexDirection: viewRTLStyle,
          backgroundColor: isDark
            ? appColors.blackColor
            : appColors.ecommorcePrimary,
        },
      ]}>
      <View
        style={[
          styles.textView,
          props.textView,
          {flexDirection: viewRTLStyle},
        ]}>
        <Heart height={'24'} color={appColors.subTitle} />
        <Text style={[styles.heading, props.textStyle]}>{props.heading}</Text>
      </View>
      <View
        style={[
          styles.vertical,
          {marginLeft: isRTL ? windowWidth(40) : null},
        ]}></View>
      <View
        style={[
          styles.textView,
          props.mainView,
          {flexDirection: viewRTLStyle},
        ]}>
        <Cart color={appColors.subTitle} />
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
          <Text style={[styles.heading, props.cartText]}>{props.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
