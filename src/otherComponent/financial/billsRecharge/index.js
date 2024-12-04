import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {t} from 'i18next';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';

export default function BillsRecharge(props) {
  const {isRTL, isDark} = useValues();
  return (
    <View>
      <FlatList
        style={[styles.flatlist, {left: !isRTL && windowWidth(10)}]}
        contentContainerStyle={isRTL && styles.contentContainerStyle}
        inverted={isRTL ? true : false}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                props.navigation &&
                props.navigation.navigate(item.gotoScreen, {name: item.name})
              }>
              <View
                style={[
                  styles.container,
                  props.container,
                  {
                    backgroundColor: isDark
                      ? appColors.foodItem
                      : appColors.financeBg,
                    borderWidth: isDark ? 0 : 1,
                  },
                ]}>
                {item.icon}
              </View>
              <View style={[styles.textContainer, props.textContainer]}>
                <Text
                  style={[
                    styles.name,
                    props.name,
                    {color: isDark ? appColors.darkTheme : appColors.gray},
                  ]}>
                  {t(item.name)}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
