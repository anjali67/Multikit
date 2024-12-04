import React, {useEffect, useRef} from 'react';
import {View, TouchableOpacity, Animated} from 'react-native';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import styles from '../style/styles';
import {windowWidth} from '@theme/appConstant';
import LinearGradient from 'react-native-linear-gradient';

import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

export default function fitnessTab({state, descriptors, navigation}) {
  const {viewRTLStyle, isDark} = useValues();
  const slideAnimation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(slideAnimation, {
      toValue: slideAnimation._value === 0 ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const Circle = ({delay}) => {
    const ring = useSharedValue(0);
    const ringStyle = useAnimatedStyle(() => {
      return {
        opacity: 1 - ring.value,
        transform: [
          {
            scale: interpolate(ring.value, [0, 1], [0, 4]),
          },
        ],
      };
    });
    useEffect(() => {
      ring.value = withDelay(
        delay,
        withTiming(1, {
          duration: 1100,
        }),
        -1,
        false,
      );
    }, []);
    return <Animated.View style={[styles.ring, ringStyle]} />;
  };

  return (
    <View
      style={[
        styles.fitnesstabContainer,
        {
          backgroundColor: isDark ? appColors.blackColor : appColors.white,
        },
      ]}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const Icon = options.tabBarIcon;
          const ActiveIcon = options.activeTabBarIcon;
          const isFocused = state.index === index;

          useEffect(() => {
            if (isFocused) {
              startAnimation();
            }
          }, [isFocused]);

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              accessibilityState={isFocused ? {selected: true} : {}}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.mainView, {marginHorizontal: 15}]}
              key={index}>
              <View
                style={[
                  {
                    alignItems: 'center',
                    justifyContent: 'center',

                    width: windowWidth(75),
                  },
                ]}>
                {isFocused ? (
                  <LinearGradient
                    colors={['#1E80EC', '#4466F2']}
                    style={isFocused && styles.dot}
                    start={{x: 1, y: 0.2}}
                    end={{x: 1, y: 1}}
                  />
                ) : null}
                <Animated.View
                  style={[
                    isFocused && {
                      transform: [
                        {
                          translateY: slideAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [200, 0],
                          }),
                        },
                      ],
                    },
                  ]}>
                  {isFocused ? <ActiveIcon /> : <Icon />}
                </Animated.View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
