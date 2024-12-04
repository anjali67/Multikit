import {t} from 'i18next';
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from '../../styles';
import {Send} from '@assets/images/food_ordering_theme/svg/send';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function commentSection() {
  const {isDark, viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View
      style={[
        styles.inputView,
        {
          flexDirection: viewRTLStyle,
          backgroundColor: isDark ? appColors.blackColor : appColors.grayLight,
        },
      ]}>
      <TextInput
        placeholderTextColor={isDark ? appColors.white : appColors.blogContent}
        style={[styles.parahraph, {flex: 1, textAlign: textRTLStyle}]}
        placeholder={t('blog.writeYourComment')}
      />
      <Send height={'20'} color={appColors.blogContent} />
    </View>
  );
}
