import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function InputField({placeholder, icon,secureTextEntry,keyboardType}) {
  const {viewRTLStyle, textRTLStyle,isDark} = useValues();
  return (
    <View style={styles.container}>
      <View style={[styles.sectionStyle, {flexDirection: viewRTLStyle,backgroundColor:isDark ? appColors.blackColor : appColors.white}]}>
        {icon}
        <TextInput
          style={[styles.textInput, {textAlign: textRTLStyle}]}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          placeholderTextColor={appColors.groceryFont}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
}
