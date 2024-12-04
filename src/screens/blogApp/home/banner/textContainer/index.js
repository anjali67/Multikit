import {t} from 'i18next';
import React from 'react';
import {View, Text} from 'react-native';
import style from '../../styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function textContainer() {
  const {isDark, textRTLStyle, viewRTLStyle} = useValues();
  return (
    <View>
      <Text
        style={[
          style.title,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.fontColor,
          },
        ]}>
        {t('blog.blogContent')}
      </Text>
      <View style={[style.row, {flexDirection: viewRTLStyle}]}>
        <Text style={style.date}>{t('blog.date')}</Text>
        <View style={style.circle}></View>
        <Text style={style.date}>{t('blog.4minRead')}</Text>
      </View>
    </View>
  );
}
