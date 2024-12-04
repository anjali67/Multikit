import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {ecommerceLogo} from '@utils/images/images';

const EcommerceSpalsh = ({navigation}) => {
  const logoScaleAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(logoScaleAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.navigate('EcommerceOnBoarding');
    }, 2000);
  }, [logoScaleAnimation, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {transform: [{scale: logoScaleAnimation}]},
        ]}>
        <Image source={ecommerceLogo} style={styles.logoStyle} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.ecommorcePrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    height: windowHeight(80),
    width: windowWidth(110),
    resizeMode: 'contain',
  },
  logoContainer: {
    alignItems: 'center',
  },
});

export default EcommerceSpalsh;
