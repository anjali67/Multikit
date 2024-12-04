import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../../styles';
import {useValues} from '@App';
import appColors from 'theme/appColors';

export default function socialView(props) {
  const {isDark, viewRTLStyle} = useValues();
  return (
    <View
      style={[
        styles.rowContainer,
        {backgroundColor: isDark ? appColors.blackColor : '#F5F6F7'},
      ]}>
      <Image source={props.image} style={styles.socialImg} />
      <Text
        style={[
          styles.name,
          {color: isDark ? appColors.white : appColors.learningBtn},
        ]}>
        {props.title}
      </Text>
    </View>
  );
}
