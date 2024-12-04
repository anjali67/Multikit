import {View, Text} from 'react-native';
import React from 'react';
import styles from '../styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function Addresses(props) {
  const {viewRTLStyle, isRTL, isDark, textRTLStyle} = useValues();
  return (
    <View style={[styles.maincontainer,{backgroundColor:isDark ? appColors.blackColor :  appColors.white,}]}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <View style={[styles.background,{backgroundColor:isDark ? appColors.darkTheme :  appColors.lightBorder}]}>{props.icon}</View>
        <View
          style={[
            styles.textView,
            {marginHorizontal: isRTL ? windowWidth(10) : windowWidth(10)},
          ]}>
          <Text style={[styles.title, {textAlign: textRTLStyle,color:isDark ? appColors.white : appColors.foodSecondary}]}>
            {props.title}
          </Text>
          <Text
            style={[
              styles.contentStyle,
              {
                textAlign: textRTLStyle,
                paddingLeft: isRTL ? windowWidth(20) : null,
                width: !isRTL && '50%',
              },
            ]}>
            {props.content}
          </Text>
        </View>
      </View>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <View style={styles.boxContainer}>
          <Text style={[styles.title, {color: appColors.white}]}>
            {t('foodCart.edit')}
          </Text>
        </View>
        <View
          style={[styles.boxContainer, {backgroundColor: appColors.delete}]}>
          <Text style={[styles.title, {color: appColors.white}]}>
            {t('orderPlaced.delete')}
          </Text>
        </View>
      </View>
    </View>
  );
}
