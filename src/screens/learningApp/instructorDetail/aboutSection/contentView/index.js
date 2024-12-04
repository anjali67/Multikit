import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../style';
import {ArrowDown} from '@assets/images/hotel_theme/svg/arrowDown';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import {useValues} from '@App';

export default function contentView(props) {
  const {textRTLStyle, isDark} = useValues();

  return (
    <View style={{marginTop: 18}}>
      <Text
        style={[
          style.title,
          props.titleStyle,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.learningBtn,
          },
        ]}>
        {t(props.title)}
      </Text>
      <Text style={[style.aboutContent, {textAlign: textRTLStyle}]}>
        {t('learning.aboutContent')}{' '}
        <Text
          style={{
            color: props.showText ? appColors.learningPlaceholder : '#E6EAEB',
            textAlign: textRTLStyle,
          }}>
          {t('learning.aboutContent1')}
        </Text>
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          props.setText(true);
        }}
        style={style.arrowView}>
        <View style={style.downArrow}>
          {!props.showText && <ArrowDown color={appColors.learningBtn} />}
        </View>
      </TouchableOpacity>
    </View>
  );
}
