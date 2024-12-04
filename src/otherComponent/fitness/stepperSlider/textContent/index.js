import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function textContentView(props) {
  const {isDark, textRTLStyle, isRTL} = useValues();
  return (
    <View style={[styles.margin, props.containerStyle]}>
      <Text
        style={[
          styles.title,
          props.titleStyle,
          {
            color: isDark ? appColors.white : appColors.fontColor,
            textAlign: textRTLStyle,
            marginHorizontal: isRTL ? 4 : null,
          },
        ]}>
        {t(props.title)}
      </Text>
      {props.content && (
        <Text style={[styles.content, {textAlign: textRTLStyle}]}>
          {t(props.content)}
        </Text>
      )}
    </View>
  );
}
