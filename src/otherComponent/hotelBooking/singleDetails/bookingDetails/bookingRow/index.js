import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import {useValues} from '@App';
import appColors from '../../../../../theme/appColors';

export default function BookingRow(props) {
  const {textRTLStyle, isDark} = useValues();
  return (
    <View
      style={[
        styles.mainContainer,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.reviewsBg},
      ]}>
      <Text
        style={[
          styles.name,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.reviewText,
          },
        ]}>
        {props.name}
      </Text>
      <Text style={[styles.date, {textAlign: textRTLStyle}]}>{props.date}</Text>
      <Text style={[styles.time, {textAlign: textRTLStyle}]}>{props.time}</Text>
    </View>
  );
}
