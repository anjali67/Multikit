import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {lineBorder} from '@utils/images/images';
import {useValues} from '@App';

export const DashView = props => {
  const {viewRTLStyle} = useValues();
  return (
    <View style={styles.addViewContainer}>
      <Image source={lineBorder} style={[styles.imageStyle, props.image]} />
      <View style={[styles.container, {flexDirection: viewRTLStyle}]}>
        <Text style={styles.plus}>+</Text>
        <Text style={styles.addItemText}>{t(props.title)}</Text>
      </View>
    </View>
  );
};
