import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useValues} from '@App';
import styles from '../styles';
import {RightArrow} from '@assets/images/common/svg/rightArrow';
import {BackArrow} from '@assets/images/common/svg/backArrow';
import appColors from '@theme/appColors';

export default function paginationContainer({curruntIndex, data, navigation}) {
  const {isRTL, isDark, viewRTLStyle} = useValues();
  return (
    <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
      <View style={[styles.mainContainer, {flexDirection: viewRTLStyle}]}>
        {data.map((_, i) => {
          return (
            <View
              style={curruntIndex === i ? styles.activeDot : styles.inActiveDot}
              key={i.toString()}
            />
          );
        })}
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('blogGettingStarted');
        }}
        style={[
          styles.circleView,
          {backgroundColor: isDark ? appColors.white : appColors.fontColor},
        ]}>
        {isRTL ? (
          <BackArrow color={isDark ? appColors.blackColor : appColors.white} />
        ) : (
          <RightArrow color={isDark ? appColors.blackColor : appColors.white} />
        )}
      </TouchableOpacity>
    </View>
  );
}
