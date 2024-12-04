import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {cabLoader} from '@utils/images/images';
import {GlobalStyle} from '@style';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function cabBookingSpalsh({navigation}) {
  const {isDark} = useValues();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('CabOnBoarding');
    }, 3000);
  }, []);

  return (
    <View style={[GlobalStyle.center,{backgroundColor:isDark ? appColors.blackColor : appColors.white}]}>
      <Image source={cabLoader} style={styles.imageView} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageView: {
    height: windowHeight(150),
    width: windowWidth(150),
    resizeMode: 'contain',
  },
});
