import React from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from '../styles';

export default function gradinatBtn(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={props.onBtnPress}
      style={style.center}>
      <LinearGradient
        colors={['#223352', '#415D6C']}
        style={[style.gradinatBtn,props.gradinatBtnStyle]}
        start={{x: 1, y: 0.2}}
        end={{x: 1, y: 1}}>
        {props.content}
      </LinearGradient>
    </TouchableOpacity>
  );
}
