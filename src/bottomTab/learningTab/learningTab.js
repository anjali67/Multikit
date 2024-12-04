import React from 'react';
import {View, TouchableOpacity, Text, useWindowDimensions} from 'react-native';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import appFonts from '@theme/appFonts';
import {t} from 'i18next';

export default function tabButton({state, descriptors, navigation}) {
  const {isDark, viewRTLStyle, isRTL} = useValues();
  const {width} = useWindowDimensions();
  const MARGIN = 0;
  const TAB_BAR_WIDTH = width - 0 * MARGIN;
  const TAB_WIDTH = width / state.routes.length;
  const translateAnimation = useAnimatedStyle(() => {
    return {
      transform:
        state.index == 0
          ? [
              {
                translateX: isRTL
                  ? withSpring(TAB_WIDTH * state.index - 67)
                  : withSpring(TAB_WIDTH * state.index + 7),
              },
            ]
          : state.index == 1
          ? [
              {
                translateX: isRTL
                  ? withSpring(TAB_WIDTH * state.index - 215)
                  : withSpring(TAB_WIDTH * state.index + 4),
              },
            ]
          : state.index == 2
          ? [
              {
                translateX: isRTL
                  ? withSpring(TAB_WIDTH * state.index - 368)
                  : withSpring(TAB_WIDTH * state.index),
              },
            ]
          : state.index == 3
          ? [
              {
                translateX: isRTL
                  ? withSpring(TAB_WIDTH * state.index - 518)
                  : withSpring(TAB_WIDTH * state.index - 3),
              },
            ]
          : [
              {
                translateX: isRTL
                  ? withSpring(TAB_WIDTH * state.index - 668)
                  : withSpring(TAB_WIDTH * state.index - 6),
              },
            ],
    };
  });

  return (
    <View
      style={[
        styles.containerView,
        {
          width: TAB_BAR_WIDTH,
          backgroundColor: isDark ? appColors.darkPrimary : appColors.white,
        },
      ]}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <Animated.View
          style={[
            styles.slidingTabContainer,
            {width: '0%'},
            translateAnimation,
          ]}>
          <View
            style={[
              styles.main,
              {
                backgroundColor: isDark
                  ? appColors.darkPrimary
                  : appColors.white,
              },
            ]}>
            <LinearGradient
              colors={['#223352', '#415D6C']}
              style={styles.gradiant}
              start={{x: 1, y: 0.2}}
              end={{x: 1, y: 1}}
            />
          </View>
        </Animated.View>

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
          };
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <>
              <TouchableOpacity
                activeOpacity={0.9}
                accessibilityRole="button"
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.tabView}
                key={index}>
                <View>
                  {isFocused ? (
                    <View style={{bottom: 19}}>
                      <ActiveIcon />
                    </View>
                  ) : (
                    <View style={{bottom: 4}}>
                      <Icon />
                    </View>
                  )}
                </View>
                <View style={styles.contentContainer}>
                  <Text
                    style={[
                      styles.label,
                      {
                        color: isFocused
                          ? isDark
                            ? appColors.white
                            : appColors.learningBtn
                          : isDark
                          ? appColors.white
                          : appColors.learningGradiant,
                        fontFamily: isFocused
                          ? appFonts.InterBold
                          : appFonts.InterMedium,
                      },
                    ]}>
                    {t(label)}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          );
        })}
      </View>
    </View>
  );
}
