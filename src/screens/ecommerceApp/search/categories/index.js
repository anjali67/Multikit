import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function Categories(props) {
  const {isRTL, isDark} = useValues();
  return (
    <View style={[styles.mainView, props.mainContainer]}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.data}
        inverted={isRTL ? true : false}
        columnWrapperStyle={styles.column}
        renderItem={({index, item}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              props.getCategory && props.getCategory(index);
            }}
            style={[
              styles.container,
              {
                backgroundColor:
                  props.selectedCategory === index
                    ? appColors.forgotFont
                    : isDark
                    ? appColors.darkTheme
                    : appColors.bgColor,
              },
            ]}>
            <Text
              style={[
                styles.title,
                props.titleStyle,
                {
                  color:
                    props.selectedCategory === index
                      ? appColors.white
                      : isDark
                      ? appColors.white
                      : appColors.ecommerceFont,
                },
              ]}>
              {t(item.title)}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
