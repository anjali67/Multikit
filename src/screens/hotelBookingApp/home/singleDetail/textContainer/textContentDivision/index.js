import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function textContentDivision(props) {
  const {viewRTLStyle, textRTLStyle, isRTL, isDark} = useValues();
  return (
    <View
      style={[
        styles.mainView,
        props.mainViewStyle,
        {
          flexDirection: viewRTLStyle,
          backgroundColor: isDark ? appColors.blackColor : appColors.white,
        },
      ]}>
      <View style={[styles.row, props.rowStyle, {flexDirection: viewRTLStyle}]}>
        {props.swap && props.swap}
        <TouchableOpacity activeOpacity={0.9} onPress={props.onSortClick}>
          <Text
            style={[
              styles.text,
              {
                color: props.textColor
                  ? props.textColor
                  : appColors.onBoardGradiant,
                marginRight: isRTL ? windowWidth(10) : windowWidth(30),
              },
              props.textStyle,
            ]}>
            {t(props.content)}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.vertical, props.vertical]}></Text>
      <View
        style={[
          styles.row,
          props.rowStyle,
          {
            flexDirection: viewRTLStyle,
            marginLeft: isRTL ? windowWidth(30) : null,
          },
        ]}>
        {props.filter && props.filter}
        <TouchableOpacity activeOpacity={0.9} onPress={props.onFilterClick}>
          <Text
            style={[
              styles.text,
              props.textStyle,
              {
                marginRight: isRTL ? windowWidth(10) : windowWidth(30),
                color: isDark ? appColors.white : appColors.reviewText,
              },
            ]}>
            {t(props.content1)}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.vertical, props.vertical]}></Text>
      <View
        style={[
          styles.row,
          props.rowStyle,
          {
            flexDirection: viewRTLStyle,
            marginLeft: isRTL ? windowWidth(30) : null,
          },
        ]}>
        {props.map && props.map}
        <TouchableOpacity activeOpacity={0.9} onPress={props.onMapClick}>
          <Text
            style={[
              styles.text,
              props.textStyle,
              {
                marginRight: isRTL ? windowWidth(10) : windowWidth(30),
                color: isDark ? appColors.white : appColors.reviewText,
              },
            ]}>
            {t(props.content2)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
