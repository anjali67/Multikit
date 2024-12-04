import {Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function DeliveredData(props) {
  const {viewRTLStyle,isDark} = useValues();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.scrollView}>
      {props.data.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {}}
          style={[styles.container, {flexDirection: viewRTLStyle,backgroundColor:isDark ? appColors.blackColor : appColors.white}]}>
          <Image
            source={item.image}
            style={index === 0 ? styles.image : styles.imageStyle}
          />
          <Text
            style={index === 0 ? [styles.title,{color:isDark ? appColors.white : appColors.black}] : [styles.title, styles.left,{color: isDark ? appColors.white :  appColors.black}]}>
            {t(item.title)}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
