import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import {t} from 'i18next';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';

export default function reviewRow(props) {
  const {viewRTLStyle, textRTLStyle, isRTL, currSymbol, currValue, isDark} =
    useValues();
  return (
    <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
      <View
        style={[
          styles.rowContainer,
          {flexDirection: viewRTLStyle, marginTop: windowHeight(6)},
          props.rowView,
        ]}>
        <View>{props.icon && props.icon}</View>
        <Text
          style={[
            styles.content,
            {marginLeft: props.icon && windowWidth(6)},
            props.contentStyle,
          ]}>
          {t(props.title)}
        </Text>
      </View>
      {props.content && (
        <Text style={[styles.content, {color: props.color}]}>
          {t(props.content)}
        </Text>
      )}
      {props.price && (
        <Text
          style={[
            styles.price,
            {color: props.color ? props.color : appColors.reviewText},
            props.priceStyle,
          ]}>
          {currSymbol}
          {(props.price * currValue).toFixed(2)}
        </Text>
      )}
    </View>
  );
}
