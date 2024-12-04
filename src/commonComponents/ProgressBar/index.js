import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {useValues} from '@App';
import {linearIndicator} from '@utils/images/images';

export default function ProgressBar({
  rate,
  progress,
  containerStyle,
  progressStyle,
  innerProgressStyle,
  showProgress,
  showprogressImg,
}) {
  const {viewRTLStyle} = useValues();
  return (
    <View style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
      {rate && <Text style={styles.rate}>{rate}</Text>}
      <View style={[styles.progressContainer, containerStyle]}>
        <View
          style={[
            styles.progressBar,
            {width: progress},
            progressStyle,
            innerProgressStyle,
          ]}
        />
        <View style={styles.container}>
          {showProgress && <Text style={styles.textStyle}>{showProgress}</Text>}
          {showprogressImg && (
            <Image source={linearIndicator} style={styles.imageStyle} />
          )}
        </View>
      </View>
    </View>
  );
}
