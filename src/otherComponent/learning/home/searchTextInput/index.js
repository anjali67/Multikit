import React from 'react';
import {View, TextInput} from 'react-native';
import {Search} from '@assets/images/chat_theme/svg/search';
import styles from '../styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function searchTextInput(props) {
  const {isRTL, textRTLStyle, viewRTLStyle, isDark} = useValues();
  return (
    <View style={styles.margin}>
      <View
        style={[
          styles.sectionStyle,
          props.sectionStyle,
          {flexDirection: viewRTLStyle},
        ]}>
        <View style={{marginTop: 10}}>
          <Search color={appColors.learningPlaceholder} />
        </View>
        <TextInput
          style={[styles.textInput, {textAlign: textRTLStyle}]}
          placeholder={t('bottomTab.Search')}
          placeholderTextColor={appColors.learningPlaceholder}
        />
      </View>
    </View>
  );
}
