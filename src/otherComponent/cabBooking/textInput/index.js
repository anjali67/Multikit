import {View, TextInput, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function textInput(props) {
  const {viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View
      style={[
        styles.mainContainer,
        {flexDirection: viewRTLStyle},
        props.mainContainer,
      ]}>
      {props.leftIcon && props.leftIcon}
      {props.showLeftIcon && (
        <Image source={props.image} style={styles.image} />
      )}
      <TextInput
        style={[styles.inputStyle, {textAlign: textRTLStyle}, props.inputStyle]}
        placeholder={props.placeholder}
        placeholderTextColor={appColors.foodContent}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
      />
      <View style={styles.iconView}>{props.icon}</View>
    </View>
  );
}
