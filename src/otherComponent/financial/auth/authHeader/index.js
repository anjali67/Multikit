import {View, Text, Image} from 'react-native';
import React from 'react';
import {financeLogo} from '@utils/images/images';
import styles from './styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function authHeader(props) {
  const {isDark} = useValues();
  return (
    <View style={styles.container}>
      <Image source={financeLogo} style={styles.imageStyle} />
      <Text
        style={[
          styles.title,
          {color: isDark ? appColors.blackColor : appColors.white},
        ]}>
        {props.title}
      </Text>
      <Text style={styles.content}>{props.subHeading}</Text>
    </View>
  );
}
