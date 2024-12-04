import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '@App';

export default function GridButton({
  text,
  text1,
  btnBgColor,
  btn1BgColor,
  btnTextStyle,
  btnText1Style,
  onBtnPress,
  onBtn1Press,
  btnStyle,
  btn1Style,
}) {
  const {viewRTLStyle} = useValues();
  return (
    <View style={[styles.container, {flexDirection: viewRTLStyle}]}>
      <TouchableOpacity
        onPress={onBtnPress}
        activeOpacity={0.7}
        style={[
          styles.btnView,
          {backgroundColor: btnBgColor, right: windowWidth(20), ...btnStyle},
        ]}>
        <Text style={[styles.btnText, {...btnTextStyle}]}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onBtn1Press}
        activeOpacity={0.7}
        style={[styles.btnView, {backgroundColor: btn1BgColor, ...btn1Style}]}>
        <Text style={[styles.btnText, {...btnText1Style}]}>{text1}</Text>
      </TouchableOpacity>
    </View>
  );
}
