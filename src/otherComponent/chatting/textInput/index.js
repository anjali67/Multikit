import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {t} from 'i18next';
import {ArrowDown} from '@assets/images/hotel_theme/svg/arrowDown';
import {Eye} from '@assets/images/chat_theme/svg/eye';
import {EyeOff} from '@assets/images/chat_theme/svg/eyeOff';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export default function textInput(props) {
  const [hidePass, setHidePass] = useState(true);
  const {textRTLStyle, isDark, viewRTLStyle, isRTL} = useValues();

  return (
    <View style={[styles.main, props.main]}>
      <Text style={[styles.label, {textAlign: textRTLStyle}]}>
        {t(props.label)}
      </Text>
      <View
        style={[
          styles.inputRow,
          props.inputRow,
          {flexDirection: viewRTLStyle},
        ]}>
        <TextInput
          placeholderTextColor={appColors.chatText}
          secureTextEntry={props.secureTextEntry && hidePass}
          keyboardType={props.keyboardType}
          style={[styles.textInput, {textAlign: textRTLStyle}]}
          placeholder={t(props.placeholder)}
        
        />
        {props.showDropDownIcon && (
          <View style={[styles.iconView, {right: isRTL ? 0 : windowWidth(4)}]}>
            <ArrowDown
              height={'14'}
              width={'12'}
              strokeWidth={'1.2'}
              color={isDark ? appColors.white : appColors.chatContent}
            />
          </View>
        )}
        {props.showPasswordIcon && (
          <TouchableOpacity
            onPress={() => {
              setHidePass(!hidePass);
            }}
            style={[
              styles.iconView,
              {bottom: 7, right: isRTL ? 0 : windowWidth(4)},
            ]}
            activeOpacity={0.9}>
            {hidePass ? <EyeOff /> : <Eye />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
