import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import styles from '../styles';
import {Sliders} from '@assets/images/hotel_theme/svg/sliders';
import {Search} from '@assets/images/chat_theme/svg/search';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {useValues} from '@App';

export default function SearchBar(props) {
  const {viewRTLStyle, isDark, textRTLStyle} = useValues();
  return (
    <View style={[styles.containerView, props.containerStyle]}>
      <Text style={[styles.label, props.labelStyle]}>{t(props.label)}</Text>
      <View style={searbarStyle.top}>
        <View
          style={[
            styles.inputView,
            {
              flexDirection: viewRTLStyle,
              backgroundColor: isDark ? appColors.darkPrimary : '#F0F2F3',
            },
            props.inputStyle,
          ]}>
          <View
            style={[
              styles.input,
              searbarStyle.rowView,
              {flexDirection: viewRTLStyle},
            ]}>
            <View style={{right: 0}}>
              {props.leftIcon ? (
                props.leftIcon
              ) : (
                <Search color={appColors.learningPlaceholder} height={'23'} />
              )}
            </View>
            <TextInput
              placeholder={
                props.placeholder ? props.placeholder : t('bottomTab.Search')
              }
              placeholderTextColor={
                props.placeholderTextColor
                  ? props.placeholderTextColor
                  : appColors.learningPlaceholder
              }
              style={[
                searbarStyle.inputView,
                props.inputStyle,
                {textAlign: textRTLStyle},
              ]}
            />
            <View style={{right: 12}}>
              {props.rightIcon ? (
                props.rightIcon
              ) : (
                <Sliders strokeWidth={'1.5'} color={appColors.learningBtn} />
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const searbarStyle = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  top: {
    marginTop: 4,
  },
  inputView: {
    right: windowWidth(12),
    height: windowHeight(40),
    width: windowWidth(320),
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT21,
  },
});
