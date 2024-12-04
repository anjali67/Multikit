import React from 'react';
import {View, Text} from 'react-native';
import style from '../../style';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function rideRow(props) {
  const {viewRTLStyle, isDark} = useValues();
  return (
    <View style={[style.row, props.rowStyle, {flexDirection: viewRTLStyle}]}>
      <Text style={[style.name, props.name,{ color: isDark ? appColors.white : appColors.cabContent}]}>{props.title}</Text>
      <Text style={[style.price, {color: props.color, color: isDark ? appColors.white : appColors.cabText}]}>{props.content}</Text>
    </View>
  );
}
