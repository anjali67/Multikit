import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../App';
import {windowWidth} from '@theme/appConstant';

export default function textInput(props) {
  const {isRTL, textRTLStyle, isDark} = useValues();
  return (
    <View
      style={[
        styles.container,
        props.container,
        {backgroundColor: isDark ? appColors.darkTheme : props.bgColor ? props.bgColor : appColors.reviewsBg},
      ]}>
      {props.label && (
        <Text
          style={[
            styles.label,
            {
              textAlign: textRTLStyle,
            },
            {right: isRTL ? windowWidth(4) : 0},
          ]}>
          {props.label}
        </Text>
      )}
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={isDark ? appColors.white : appColors.reviewText}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        style={[
          styles.inputContainer,
          props.inputContainer,

          {
            textAlign: textRTLStyle,
            right: isRTL ? 0 : windowWidth(6),
            color: isDark ? appColors.white : appColors.reviewText,
          },
        ]}
      />
    </View>
  );
}
