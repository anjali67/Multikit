import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {useValues} from '@App';
import styles from './styles';
import appColors from '@theme/appColors';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import {qrBlack} from '@utils/images/images';
import {t} from 'i18next';
export default function FinanceTabBar({state, descriptors, navigation}) {
  const {isDark, viewRTLStyle, isRTL} = useValues();
  const handleButtonPress = () => {
    navigation.navigate('ScanQr');
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
        styles.tabContainer,
        {
          backgroundColor: isDark
            ? appColors.financeDarkBg
            : appColors.gradient2,
          borderTopColor: isDark ? appColors.lightGray1 : appColors.financeBg,
        },
      ]}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <View />
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
                style={[styles.bottomContainer]}
                key={index}>
                {isFocused && <View style={[styles.border]} />}
                {state.index === 2 && isFocused && (
                  <View
                    style={[
                      styles.mainContainer,
                      {
                        flexDirection: viewRTLStyle,
                        backgroundColor: isDark ? '#930354' : '#2E031B',
                      },
                    ]}>
                    <View style={[styles.imageView]}>
                      <Image source={qrBlack} style={styles.qrImg} />
                    </View>
                    <TouchableOpacity onPress={() => handleButtonPress()}>
                      <Text style={[styles.label, styles.textStyle]}>
                        {t('financial.scanToPay')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                <View>
                  {isFocused && <Circle delay={0} />}
                  {isFocused ? <ActiveIcon /> : <Icon />}
                </View>
                <Text
                  style={[
                    styles.label,
                    {
                      color: isFocused
                        ? appColors.gradient1
                        : appColors.inActiveIcon,
                    },
                  ]}>
                  {label}
                </Text>
              </TouchableOpacity>
            </>
          );
        })}
      </View>
    </View>
  );
}
