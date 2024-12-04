import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {t} from 'i18next';
import {categories} from '@utils/json/grocery';
import styles from './styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function CategoryData() {
  const {isDark} = useValues();
  const [key, setKey] = useState(0);
  const onCategory = item => {
    setKey(item);
  };
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.scrollView}>
      {categories.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
            onCategory(index);
          }}
          style={[
            styles.container,
            {
              backgroundColor:
                key === index
                  ? appColors.groceryBtn
                  : isDark
                  ? appColors.darkTheme
                  : appColors.category,
            },
          ]}>
          <Image source={item.image} style={styles.image} />
          <Text
            style={[
              styles.title,
              {
                color:
                  key === index
                    ? appColors.white
                    : isDark
                    ? appColors.white
                    : appColors.black,
              },
            ]}>
            {t(item.title)}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
