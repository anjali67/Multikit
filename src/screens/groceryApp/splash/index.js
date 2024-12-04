import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import appColors from '@theme/appColors';
import {grocerySplash} from '@utils/images/images';
import {windowHeight, windowWidth} from '@theme/appConstant';
import { useValues } from '@App';

export default function GrocerySplash({navigation}) {
  const {isDark} = useValues()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('GroceryOnBoarding');
    }, 3000);
  }, []);

  return (
    <View style={[styles.container,{backgroundColor:isDark ? appColors.blackColor : appColors.white}]}>
      <Image source={grocerySplash} style={styles.imageStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: windowHeight(80),
    width: windowWidth(80),
    resizeMode: 'contain',
  },
});
