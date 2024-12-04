import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import {useValues} from '@App';

export default function informationRow(props) {
  const {textRTLStyle, viewRTLStyle} = useValues();
  return (
    <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
      <View style={styles.circle}></View>
      <Text style={[styles.title, {textAlign: textRTLStyle}]}>
        {props.title}
      </Text>
    </View>
  );
}
