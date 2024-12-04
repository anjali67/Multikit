import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useTranslation} from 'react-i18next';

export default function Button({onPress, style, btnTextStyle, text}) {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.button, style]}>
      <Text style={[styles.buttonText, btnTextStyle]}>{t(text)}</Text>
    </TouchableOpacity>
  );
}
