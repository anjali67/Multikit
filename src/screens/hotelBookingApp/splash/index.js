import {View, Image, StyleSheet, Animated, Easing} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {GlobalStyle} from '../../../style';
import {hotelLogo} from '@utils/images/images';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function hotelBookingSplash({navigation}) {
  const shakeAnimationValue = useRef(new Animated.Value(0)).current;
  const {isDark} = useValues();
  useEffect(() => {
    startShakeAnimation();
    setTimeout(() => {
      navigation.navigate('HotelOnBoarding');
    }, 3000);
  }, []);

  const startShakeAnimation = () => {
    shakeAnimationValue.setValue(0);
    Animated.timing(shakeAnimationValue, {
      toValue: 1,
      duration: 700,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const shakeAnimationStyle = {
    transform: [
      {
        translateX: shakeAnimationValue.interpolate({
          inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
          outputRange: [0, -20, 20, -30, 30, 0],
        }),
      },
    ],
  };
  return (
    <View
      style={[
        styles.mainContainer,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <Animated.View style={shakeAnimationStyle}>
        <Image source={hotelLogo} style={GlobalStyle.loaderImage} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.white,
  },
});
