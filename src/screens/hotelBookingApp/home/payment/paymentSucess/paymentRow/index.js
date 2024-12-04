import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import {useValues} from '@App';

export default function paymentRow(props) {
  const {viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View style={styles.container}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <Text style={[styles.text, {textAlign: textRTLStyle}]}>
          {props.checkIn}
        </Text>
        <Text style={[styles.text, props.textStyle, {textAlign: textRTLStyle}]}>
          {props.checkOut}
        </Text>
      </View>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <Text
          style={[
            styles.content,
            props.contentStyle,
            {textAlign: textRTLStyle},
          ]}>
          {props.checkIntime}
        </Text>
        <Text
          style={[
            styles.content,
            props.contentStyle,
            {left: props.left && props.left, textAlign: textRTLStyle},
          ]}>
          {props.checkOutTime}
        </Text>
      </View>
    </View>
  );
}
