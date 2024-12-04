import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import appColors from '@theme/appColors';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {useTranslation} from 'react-i18next';
import {useValues} from '@App';

export default function SearchBar(props) {
  const {t} = useTranslation();
  const {textRTLStyle, isDark} = useValues();
  return (
    <View>
      <View style={{marginTop: props.top ? props.top : windowHeight(9)}}>
        <View
          style={[
            styles.inputView,
            props.inputStyle,
            {
              width: props.width ? props.width : windowWidth(440),
              borderColor: props.borderColor
                ? props.borderColor
                : appColors.white,
              backgroundColor: props.color
                ? props.color
                : isDark
                ? appColors.blackColor
                : appColors.white,
            },
          ]}>
          <TextInput
            placeholder={t(props.placeholder)}
            placeholderTextColor={
              props.placeHolderColor
                ? props.placeHolderColor
                : appColors.groceryFont
            }
            style={[
              styles.input,
              {
                textAlign: textRTLStyle,
                width: props.width ? props.width : windowWidth(330),
                color: isDark ? appColors.white : null,

                ...props.inputText,
              },
              props.leftIcon
                ? {marginLeft: windowWidth(50)}
                : {marginLeft: windowWidth(20)},
            ]}
          />
          <TouchableOpacity
            style={[styles.leftIcon]}
            onPress={props.onPress}
            activeOpacity={0.7}>
            {props.leftIcon}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rightIcon}
            onPress={props.onPress}
            activeOpacity={0.7}>
            {props.isText ? (
              <Text style={styles.text}>{props.text}</Text>
            ) : (
              props.rightIcon
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
