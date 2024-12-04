import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {t} from 'i18next';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';

export default function bookingTitle(props) {
  const {viewRTLStyle} = useValues();
  return (
    <View
      style={[
        styles.row,
        {marginBottom: windowHeight(6), flexDirection: viewRTLStyle},
      ]}>
      {props.icon}
      <Text style={styles.name}>{t(props.bookingStationName)}</Text>
    </View>
  );
}
