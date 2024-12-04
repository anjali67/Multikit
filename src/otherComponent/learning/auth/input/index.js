import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from '../../styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function input(props) {
  const {isRTL, textRTLStyle, isDark} = useValues();
  return (
    <View style={[styles.containerView, {marginTop: 19},props.containerStyle]}>
      <Text
        style={[
          styles.label,
          {
            textAlign: textRTLStyle,
            left: isRTL ? null : windowWidth(5),
            right: isRTL ? windowWidth(15) : null,
            color: isDark ? appColors.white : appColors.learningBtn,
          },
        ]}>
        {t(props.label)}
      </Text>
      <View style={[styles.margin,props.margin]}>
        <View
          style={[
            styles.inputView,
            {backgroundColor: isDark ? appColors.darkTheme : '#F0F2F3'},
          ]}>
          <TextInput
          secureTextEntry={props.secureTextEntry}
            placeholder={t(props.placeholder)}
             textContentType={props.textContentType}
             keyboardType={props.keyboardType}
            style={[
              styles.input,
              {
                paddingLeft: windowWidth(20),
                textAlign: textRTLStyle,
                paddingRight: isRTL ? 10 : null,
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.learningInput,
              },
            ]}
            placeholderTextColor={appColors.learningPlaceholder}
          />
        </View>
      </View>
    </View>
  );
}
