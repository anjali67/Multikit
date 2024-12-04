import React, {useRef, useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Animated} from 'react-native';
import {useValues} from '@App';
import appColors from '../../theme/appColors';
import styles from '../style/styles';

export default function blogTab({state, descriptors, navigation}) {
  const {viewRTLStyle, isDark} = useValues();
  const [activeItem, setActiveItem] = useState(0);
  const onSelectItem = key => {
    props.data.map(item => {
      if (item.id === key) {
        setActiveItem(key);
        navigation.navigate(item.screen);
      }
    });
  };
  useEffect(() => {
    activeItem && shake();
  }, [activeItem]);

  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const rotation = shakeAnimation.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-3deg', '3deg'],
  });

  return (
    <View
      style={[
        styles.tabContainer,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.white,
          borderTopColor: isDark ? appColors.darkColor : appColors.divider,
        },
      ]}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const Icon = options.tabBarIcon;
          const ActiveIcon = options.activeTabBarIcon;
          const isFocused = state.index === index;
          useEffect(() => {
            if (isFocused) {
              shake();
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
              style={styles.mainView}
              key={index}>
              {isFocused && (
                <View
                  style={[
                    styles.border,
                    {
                      borderTopColor: isDark
                        ? appColors.white
                        : appColors.fontColor,
                    },
                  ]}
                />
              )}
              <Animated.View
                style={[
                  {
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  isFocused && {
                    transform: [{rotate: rotation}],
                  },
                ]}>
                {isFocused ? <ActiveIcon /> : <Icon />}
                <Text
                  style={[
                    styles.label,
                    {
                      color: isDark
                        ? appColors.white
                        : isFocused
                        ? appColors.fontColor
                        : appColors.subTitle,
                    },
                  ]}>
                  {label}
                </Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
