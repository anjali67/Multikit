import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function EcommerceTextInput(props) {
  const {textRTLStyle, isRTL, isDark} = useValues();
  return (
    <View style={styles.mainContainer}>
      <Text
        style={[
          styles.label,
          {
            textAlign: textRTLStyle,
            marginRight: isRTL ? windowWidth(20) : windowWidth(0),
          },
        ]}>
        {props.label}
      </Text>
      <View style={styles.sectionStyle}>
        <TextInput
          style={[
            styles.textInput,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.lightGray1 : appColors.foodContent,
            },
          ]}
          placeholder={props.placeholder}
          underlineColorAndroid="transparent"
          placeholderTextColor={appColors.ecommerceFont}
        />
      </View>
    </View>
  );
}
