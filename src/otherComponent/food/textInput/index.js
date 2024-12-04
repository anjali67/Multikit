import {View, TextInput, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import appColors from '@theme/appColors';
import {Send} from '@assets/images/food_ordering_theme/svg/send';
import {useValues} from '@App';
import {Neomorph} from 'react-native-neomorph-shadows';
import {GlobalStyle} from '../../../style';

const FoodTextInput = props => {
  const {viewRTLStyle, textRTLStyle, isDark} = useValues();
  return (
    <View style={styles.container}>
      {isDark ? (
        <Neomorph
          darkShadowColor="#FFF"
          lightShadowColor={appColors.blackColor}
          style={[
            props.shadowStyle ? props.shadowStyle : GlobalStyle.shadowStyle,
            {
              backgroundColor: props.bgColor
                ? props.bgColor
                : isDark
                ? appColors.blackColor
                : appColors.white,
            },
          ]}>
          <TextInput
            secureTextEntry={props.secureTextEntry}
            style={[styles.textInput, {textAlign: textRTLStyle}]}
            placeholder={props.placeholder}
            underlineColorAndroid="transparent"
            placeholderTextColor={appColors.foodContent}
            keyboardType={props.keyboardType}
        
          />
        </Neomorph>
      ) : (
        <View
          style={[
            styles.sectionStyle,
            props.textInputContainer,
            {
              flexDirection: viewRTLStyle,
              backgroundColor: props.bgColor
                ? props.bgColor
                : isDark
                ? appColors.blackColor
                : appColors.white,
            },
          ]}>
          <TextInput
              secureTextEntry={props.secureTextEntry}
            style={[styles.textInput, {textAlign: textRTLStyle}]}
            placeholder={props.placeholder}
            underlineColorAndroid="transparent"
            placeholderTextColor={appColors.foodContent}
            keyboardType={props.keyboardType}

          />
          {props.locationIcon && <Send />}
        </View>
      )}
    </View>
  );
};

export default FoodTextInput;
