import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function ButtonWithIcon(props) {
  const {viewRTLStyle, isRTL, setIsRTL, setIsDark, isDark} = useValues();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.row, props.mainContainer]}>
      <View
        style={[
          styles.btnStyle,
          props.btnStyle,
          {flexDirection: viewRTLStyle},
        ]}>
        {props.icon && (
          <View
            style={[
              styles.iconView,
              {marginLeft: isRTL ? windowWidth(8) : null},
            ]}>
            {props.icon}
          </View>
        )}
        {props.image && (
          <Image
            source={props.image}
            style={[
              styles.image,
              {marginLeft: isRTL ? windowWidth(14) : null},
              props.imageStyle,
            ]}
            tintColor={props.tinColor}
          />
        )}
        <View>
          <Text style={[styles.btn, props.titleStyle]}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
