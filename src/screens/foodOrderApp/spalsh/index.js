import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import foodOrderStyle from '../style/styles';
import {splashLogo} from '@utils/images/images';
import {windowHeight, windowWidth} from '@theme/appConstant';
import { useValues } from '@App';
import appColors from '@theme/appColors';

export default function FoodOrderSplash({navigation}) {
  const {isDark} = useValues()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('FoodOnBoarding');
    }, 3000);
  }, []);

  return (
    <View style={[foodOrderStyle.mainContainer,{backgroundColor:isDark ? appColors.darkTheme : appColors.foodPrimary}]}>
      <View style={[foodOrderStyle.center,{flex:1}]}>
        <Image source={splashLogo} style={styles.imageStyle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: windowHeight(120),
    width: windowWidth(90),
    resizeMode: 'contain',
  },
});
