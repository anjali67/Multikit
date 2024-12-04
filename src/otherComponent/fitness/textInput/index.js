import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {t} from 'i18next';

export default function fitnessTextInput(props) {
  const {textRTLStyle, isDark} = useValues();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.sectionStyle} />
      <TextInput
        style={[
          styles.textInput,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.lightGray1 : appColors.white,
          },
        ]}
        placeholder={t(props.placeholder)}
        placeholderTextColor={appColors.white}
      />
    </View>
  );
}
