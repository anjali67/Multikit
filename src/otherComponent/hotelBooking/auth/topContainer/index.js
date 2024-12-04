import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function topContainer(props) {
  const {isDark} = useValues();
  return (
    <View>
      <View style={[styles.mainView]}></View>
      <View style={styles.innerContainer}></View>
      <View
        style={[
          styles.mainContainer,
          {backgroundColor: isDark ? appColors.blackColor : appColors.white},
        ]}>
        {props.content}
      </View>
    </View>
  );
}
