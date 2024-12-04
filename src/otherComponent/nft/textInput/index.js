import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function textInput(props) {
  const {isDark, viewRTLStyle, textRTLStyle, isRTL} = useValues();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.grayLight,
          flexDirection: viewRTLStyle,
        },
      ]}>
      {props.icon}
      <View style={styles.textView}>
        <Text
          style={[
            styles.label,
            {
              color: isDark ? appColors.white : appColors.nftTitle,
              textAlign: textRTLStyle,
            },
          ]}>
          {t(props.label)}
        </Text>
        <TextInput
          secureTextEntry={props.secureTextEntry}
          style={[
            styles.textInput,
            {
              color: isDark ? appColors.white : appColors.cabContent,
              textAlign: textRTLStyle,
            },
          ]}
          placeholderTextColor={appColors.cabContent}
          placeholder={t(props.placeholder)}
        />
      </View>
    </View>
  );
}
