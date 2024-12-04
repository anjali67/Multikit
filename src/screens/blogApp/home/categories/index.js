import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useValues} from '@App';
import {categoryFilter, categoriesData} from '@utils/json/blog';
import {t} from 'i18next';
import styles from '../styles';
import appColors from '@theme/appColors';
import CategoryRow from './categoryRow';
import { useNavigation } from '@react-navigation/native';

export default function categories(props) {
  const categories = categoryFilter;
  const [category, setcategory] = useState([]);
  const [select, setSelect] = useState(0);
  const {viewRTLStyle, textRTLStyle, isDark} = useValues();

  const navigation = useNavigation()

  useEffect(() => {
    selectValue(0);
  }, []);

  const selectValue = id => {
    setSelect(id);
    var category = categoriesData;
    var arr = [];
    category.map(item => {
      if (item.id == id + 1) {
        arr.push(item);
      }
    });
    setcategory(arr);
  };

  return (
    <View>
      <Text
        style={[
          styles.title,
          styles.marginTop,
          styles.textContainer,
          {
            textAlign: textRTLStyle,
            color: isDark ? appColors.white : appColors.fontColor,
          },
        ]}>
        {t('common.Categories')}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollView,
          {flexDirection: viewRTLStyle},
        ]}>
        {categories.map((item, key) => (
          <TouchableOpacity
            key={key}
            activeOpacity={0.8}
            onPress={() => selectValue(key)}
            style={[
              styles.filterView,
              {
                backgroundColor:
                  key === select
                    ? appColors.fontColor
                    : isDark
                    ? appColors.blackColor
                    : appColors.grayLight,
              },
            ]}>
            <Text
              style={[
                styles.category,
                {
                  color:
                    key === select
                      ? appColors.white
                      : isDark
                      ? appColors.white
                      : appColors.fontColor,
                },
              ]}>
              {t(item.name)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <CategoryRow  data={category} />
    </View>
  );
}
