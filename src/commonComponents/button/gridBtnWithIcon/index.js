import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {useValues} from '@App';

export default function GridBtnWithIcon({
  text,
  text1,
  btnBgColor,
  btn1BgColor,
  btnTextStyle,
  btnText1Style,
  onBtnPress,
  onBtn1Press,
  btnIcon,
  btn1Icon,
  containerStyle,
  btnViewStyle
}) {
  const {viewRTLStyle} = useValues();
  return (
    <View style={[styles.container, {flexDirection: viewRTLStyle},{...containerStyle}]}>
      <TouchableOpacity
        onPress={onBtnPress}
        activeOpacity={0.7}
        style={[styles.btnView, {backgroundColor: btnBgColor}]}>
        {btnIcon}
        <Text style={[styles.btnText, {...btnTextStyle}]}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onBtn1Press}
        activeOpacity={0.7}
        style={[styles.btnView, {backgroundColor: btn1BgColor},{...btnViewStyle}]}>
        {btn1Icon}
        <Text style={[styles.btnText, {...btnText1Style}]}>{text1}</Text>
      </TouchableOpacity>
    </View>
  );
}
