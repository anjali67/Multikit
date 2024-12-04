import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function headingContainer(props) {
  const {viewRTLStyle, isDark} = useValues();
  return (
    <View style={styles.header}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.chatText},
          ]}>
          {t(props.title)}
        </Text>
        <View
          style={[
            styles.circleView,
            {backgroundColor: isDark ? appColors.white : appColors.chatText},
          ]}>
          <Text
            style={[
              styles.plusIcon,
              {color: isDark ? appColors.blackColor : appColors.white},
            ]}>
            +
          </Text>
        </View>
      </View>
    </View>
  );
}
