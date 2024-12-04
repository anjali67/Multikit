import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function textInputView(props) {
  const {viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View style={[styles.mainContainer, {flexDirection: viewRTLStyle}]}>
      <View>
        <TextInput
          style={[styles.inputStyle, {textAlign: textRTLStyle}]}
          placeholder={props.placeHolder}
          placeholderTextColor={appColors.financeContent}
        />
      </View>
      <View style={styles.iconView}>{props.icon}</View>
    </View>
  );
}
