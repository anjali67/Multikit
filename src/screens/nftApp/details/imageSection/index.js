import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles';
import {detail1, detail, onboard7} from '@utils/images/images';

export default function imageSection(props) {
  return (
    <View>
      {props.selectCategory == 0 ? (
        <View style={{alignItems: 'center'}}>
          <Image source={detail} style={styles.image} />
          <Image source={onboard7} style={styles.imageContainer} />
        </View>
      ) : (
        <View>
          <Image source={detail1} style={styles.image} />

          <Image source={onboard7} style={styles.imageContainer} />
        </View>
      )}
      <View style={styles.blankView}></View>
    </View>
  );
}
