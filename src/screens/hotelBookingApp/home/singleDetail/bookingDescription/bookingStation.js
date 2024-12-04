import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';

export default function bookingStationRow(props) {
  const {viewRTLStyle} = useValues();
  return (
    <>
      <View
        style={[
          styles.row,
          styles.rowStyle,
          props.rowStyle,
          {flexDirection: viewRTLStyle},
        ]}>
        <Text style={styles.content}>{t(props.stationName)}</Text>
        <Text style={styles.content}>{t(props.distance)}</Text>
      </View>
    </>
  );
}
