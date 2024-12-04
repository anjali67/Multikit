import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import styles from './styles';

export default function GradiantbtnView(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={props.onBtnPress}
      style={styles.mainView}>
      <LinearGradient
        colors={[
          appColors.onBoardGradiant,
          props.gradiant ? props.gradiant : '#7232d9',
        ]}
        style={[styles.btn, props.btnStyle]}
        start={{x: 1, y: 0.2}}
        end={{x: 1, y: 1}}>
        <View>
          <Text style={[styles.btnText, props.btnText]}>{props.btnTitle}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
