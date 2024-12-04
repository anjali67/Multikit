import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function AddressRow(props) {
  const {viewRTLStyle, isDark, textRTLStyle} = useValues();
  return (
    <View style={[styles.addressView, {flexDirection: viewRTLStyle}]}>
      <View style={styles.background}>{props.icon}</View>
      <View style={styles.address}>
        <Text style={[styles.title, {textAlign: textRTLStyle,color: isDark ? appColors.white : appColors.foodSecondary}]}>
          {t(props.title)}
        </Text>
        <Text style={[styles.contentStyle, styles.fontsizes]}>
          {t(props.content)}
        </Text>
      </View>
    </View>
  );
}
