import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useValues} from '@App';
import styles from './styles';
import appColors from '@theme/appColors';

export default function BottomCartView(props) {
  const {currSymbol, currValue, viewRTLStyle, textRTLStyle, isRTL, isDark} =
    useValues();
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
      <View style={[styles.textView, props.textView]}>
        {props.heading ? (
          <Text style={[styles.price, props.textStyle, {marginTop: 10}]}>
            {props.heading}
          </Text>
        ) : (
          <>
            <Text
              style={[
                styles.price,
                {textAlign: textRTLStyle, right: isRTL ? 6 : null},
              ]}>
              {currSymbol}
              {(currValue * props.price).toFixed(2)}
            </Text>
            <Text style={styles.text}>{props.content}</Text>
          </>
        )}
      </View>
      <View
        style={[
          styles.mainView,
          props.mainView,
          {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
        ]}>
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
          <Text
            style={[
              styles.cartText,
              props.cartText,
              {color: isDark ? appColors.white : appColors.ecommerceFont},
            ]}>
            {props.title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
