import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../style';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export const MyTabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const {isDark, viewRTLStyle} = useValues();

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={[style.main, {flexDirection: viewRTLStyle}]}>
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
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={style.labelView}>
              <Text
                style={[
                  isFocused ? style.activeLabel : style.inActiveLabel,
                  {
                    color: isFocused
                      ? isDark
                        ? appColors.white
                        : appColors.learningBtn
                      : appColors.learningPlaceholder,
                  },
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
