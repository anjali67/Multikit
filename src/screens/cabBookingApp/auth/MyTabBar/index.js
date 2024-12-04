import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export const MyTabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const {isDark} = useValues();

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={[styles.main,{backgroundColor:  appColors.verticalLine}]}>
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
            onLongPress={onLongPress}>
            <View>
              <LinearGradient
                colors={[
                  isFocused ? appColors.avtiveGradiant : appColors.verticalLine,
                  isFocused
                    ? appColors.activeGradiant1
                    : appColors.verticalLine,
                ]}
                style={styles.labelView}
                start={{x: 1, y: 0.2}}
                end={{x: 0, y: 1}}>
                <Text
                  style={isFocused ? styles.activeLabel : styles.inActiveLabel}>
                  {label}
                </Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
