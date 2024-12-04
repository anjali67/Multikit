import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {windowWidth} from '@theme/appConstant';

export const MyTabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const {isDark, viewRTLStyle} = useValues();
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View
      style={[
        styles.main,
        {
          borderBottomColor: isDark
            ? appColors.blackColor
            : appColors.borderColor,
          flexDirection: viewRTLStyle,
        },
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

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
          <TouchableOpacity
            activeOpacity={0.9}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.containerView,
              {
                borderBottomWidth: isFocused ? 2 : 0,
                width: isFocused ? windowWidth(243) : windowWidth(200),
              },
            ]}>
            <View
              style={[
                styles.labelView,
                {
                  backgroundColor: isFocused ? appColors.nftBg : null,
                  width: isFocused ? windowWidth(240) : windowWidth(180),
                },
              ]}>
              <Text
                style={[
                  styles.label,
                  {color: isFocused ? appColors.white : appColors.nftTitle},
                ]}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
