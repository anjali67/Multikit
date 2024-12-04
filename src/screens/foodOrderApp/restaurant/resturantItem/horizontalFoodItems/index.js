import {View, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import {useValues} from '@App';


export default function HorizontalFoodItems(props) {
  const { isDark, isRTL} = useValues();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => props.setIndex(props.index)}
      style={styles.mainContainer}>
      <Text
        style={[
          styles.textStyle,
          {
            color:
              props.index == props.selectedIndex
                ? isDark ? appColors.white : appColors.foodSecondary
                : appColors.foodItem,
          },
        ]}>
        {t(props.item.title)}
      </Text>
      {props.index == props.selectedIndex && (
        <View style={styles.border}></View>
      )}
    </TouchableOpacity>
  );
}
