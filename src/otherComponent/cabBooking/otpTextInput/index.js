import React, {useState} from 'react';
import {View} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import appColors from '@theme/appColors';
import styles from './styles';
import {useValues} from '@App';

export default function otpInput() {
  const [isFocused, setIsFocused] = useState(false);
  const {isDark, textRTLStyle} = useValues();
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View style={[styles.mainContainer,{backgroundColor:isDark ? appColors.blackColor : appColors.white}]}>
      <OTPTextView
        inputCount={5}
        textInputStyle={[styles.otpInput,{color:isDark ? appColors.white : appColors.cabText}]}
        tintColor={appColors.inputBorder}
        offTintColor={appColors.inputBorder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
}
