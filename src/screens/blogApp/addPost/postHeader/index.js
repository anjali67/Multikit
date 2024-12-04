import {t} from 'i18next';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import style from '../styles';
import appColors from '@theme/appColors';
import {Cross} from '@assets/images/common/svg/cross';
import {useValues} from '@App';

export default function postHeader(props) {
  const {isDark, viewRTLStyle, textRTLStyle} = useValues();
  return (
    <View>
      <View style={[style.row, {flexDirection: viewRTLStyle}]}>
        <Text
          style={[
            style.title,
            {color: isDark ? appColors.white : appColors.fontColor},
          ]}>
          {t('blog.addPost')}
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={props.onPress}>
          <Cross
            height={'24'}
            width={'24'}
            color={isDark ? appColors.white : appColors.blackColor}
            strokeWidth={'1.7'}
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.inputView}>
          <TextInput
            placeholder={t('blog.title')}
            placeholderTextColor={appColors.subTitle}
            style={[
              style.inputStyle,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.fontColor,
              },
            ]}
          />
          <View
            style={[
              style.horizontalLine,
              {
                borderTopColor: isDark
                  ? appColors.darkTheme
                  : appColors.divider,
              },
            ]}></View>
          <TextInput
            multiline
            placeholder={t('blog.contentType')}
            placeholderTextColor={appColors.subTitle}
            style={[
              style.inputStyle,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.white : appColors.fontColor,
              },
            ]}
          />
        </View>
      </ScrollView>
    </View>
  );
}
