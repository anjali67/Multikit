import React from 'react';
import {View, Animated, useWindowDimensions} from 'react-native';
import styles from '../styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function paginator({data, scrollx}) {
  const {width} = useWindowDimensions();
  const {isRTL, isDark} = useValues();
  return (
    <View style={styles.mainContainer}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollx.interpolate({
          inputRange,
          outputRange: [50, 50, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollx.interpolate({
          inputRange,
          outputRange: [0.5, 1, 0.5],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[
              styles.dot,
              {
                opacity: opacity,
                backgroundColor: isDark
                  ? appColors.gray
                  : appColors.onBoardGradiant2,
              },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}
