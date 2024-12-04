import {Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function CuisineCategory(props) {
  const {isDark} = useValues();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={props.scrollViewStyle}>
      {props.data.map(item => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate('FoodShop', {item: item.title});
          }}
          style={styles.container}>
          <Image source={item.image} style={styles.image} />
          <Text
            style={[
              styles.title,
              {color: isDark ? appColors.white : appColors.black},
            ]}>
            {t(item.title)}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
