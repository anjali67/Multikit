import {t} from 'i18next';
import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import styles from '../styles';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function onBoardItem({item}) {
  const {width} = useWindowDimensions();
  const {isRTL,isDark} = useValues();
  return (
    <View style={[styles.container, {width: width,backgroundColor:isDark ? appColors.blackColor : appColors.white}]}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={[styles.title,{  color: isDark ? appColors.white : appColors.cabText}]}>{t(item.title)}</Text>
        <Text style={styles.content}>{t(item.content)}</Text>
      </View>
    </View>
  );
}
