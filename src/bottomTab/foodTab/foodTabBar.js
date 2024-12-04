import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Dimensions, Animated} from 'react-native';
import {useValues} from '@App';
import styles from './styles';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';

export const FoodTabBar = ({state, descriptors, navigation}) => {
  const [translateValue] = useState(new Animated.Value(0));
  const totalWidth = Dimensions.get('window').width - 40;
  const tabWidth = totalWidth / state.routes.length;
  const {viewRTLStyle, isRTL, isDark} = useValues();
  const [activeTab, setActiveTab] = useState(0);
  const animateSlider = index => {
    setActiveTab(index);
    Animated.spring(translateValue, {
      toValue: index * tabWidth,
      velocity: 10,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    animateSlider(state.index);
  }, [state.index]);
  const logoScaleAnimation = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(logoScaleAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  });
  return (
    <View
      style={[
        styles.tabContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <Animated.View
          style={[
            styles.slider,
            {
              transform: [{translateX: translateValue}],
              width: '10%',
              marginRight: isRTL ? windowWidth(20) : 0,
              marginLeft:
                activeTab == 0
                  ? windowWidth(19)
                  : activeTab == 4
                  ? windowWidth(11)
                  : windowWidth(16),
            },
          ]}
        />

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
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
            animateSlider(index);
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
              <View>{isFocused ? <ActiveIcon /> : <Icon />}</View>
              <Animated.Text
                style={[
                  styles.label,
                  {
                    color: isFocused
                      ? isDark
                        ? appColors.white
                        : appColors.foodSecondary
                      : appColors.foodContent,
                  },
                  {transform: [{scale: isFocused ? logoScaleAnimation : 1}]},
                ]}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
