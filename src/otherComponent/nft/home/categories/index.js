import {Text, TouchableOpacity, Image, FlatList, View} from 'react-native';
import React, {useState} from 'react';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import styles from '../styles';

export default function Categories(props) {
  const {isDark, isRTL} = useValues();
  const [selectedCategory, setCategory] = useState(0);

  const onCategoryClick = category => {
    setCategory(category);
  };

  return (
    <View style={styles.mainView}>
      <FlatList
        data={props.data}
        inverted={isRTL ? true : false}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({index, item}) => {
          return (
            <View style={styles.mainContainer}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  onCategoryClick(index);
                }}
                style={styles.container}>
                <Image
                  source={item.image}
                  style={[
                    styles.imageStyle,
                    {borderWidth: selectedCategory == index ? 1.6 : 0},
                  ]}
                />
                <Text
                  style={[
                    styles.title,
                    {
                      color: isDark ? appColors.white : appColors.cabContent,
                    },
                  ]}>
                  {t(item.title)}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
