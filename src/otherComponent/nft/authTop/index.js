import React from 'react';
import {View, Text, Image} from 'react-native';
import {astronaut} from '@utils/images/images';
import {topBg} from '@utils/images/images';
import styles from './styles';
import nftStyle from '@screens/nftApp/style';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function authTop(props) {
  const {isDark, isRTL, textRTLStyle} = useValues();
  return (
    <View>
      <Image source={topBg} style={styles.image} />
      <View style={nftStyle.center}>
        <Image source={astronaut} style={styles.imageStyle} />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.title,
            {
              color: isDark ? appColors.white : appColors.nftTitle,
              textAlign: textRTLStyle,
            },
          ]}>
          {props.title}
        </Text>
        <Text style={[styles.subContent, {textAlign: textRTLStyle}]}>
          {props.subContent}
        </Text>
      </View>
    </View>
  );
}
