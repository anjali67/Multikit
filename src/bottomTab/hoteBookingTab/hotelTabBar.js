import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {useValues} from '@App';
import styles from './styles/styles';
import appColors from '@theme/appColors';
import {bubbelImg} from '@utils/images/images';

export const HotelTabBar = ({state, descriptors, navigation}) => {
  const {viewRTLStyle, isRTL, isDark} = useValues();
  return (
    <View
      style={[
        styles.tabContainer,
        {
          backgroundColor: isDark ? appColors.blackColor : appColors.white,
          borderTopColor: isDark ? appColors.darkTheme : appColors.divider,
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
            <TouchableOpacity activeOpacity={0.8}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              accessibilityState={isFocused ? {selected: true} : {}}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.mainView}
              key={index}>
              <View>
                {isFocused ? (
                  <Image
                    tintColor={isDark && appColors.onBoardGradiant}
                    source={bubbelImg}
                    style={styles.image}
                  />
                ) : (
                  <View style={styles.image}></View>
                )}
                {<Icon />}
              </View>
              <Text
                style={[
                  styles.label,
                  {color: isDark ? appColors.white : appColors.reviewText},
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
