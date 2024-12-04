import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {blogImg} from '@utils/images/images';
import {GlobalStyle} from '../../../style';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function BlogAppSplash({navigation}) {
  const {isDark} = useValues();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('blogOnBoarding');
    }, 3000);
  }, []);

  return (
    <View
      style={[
        GlobalStyle.center,
        {backgroundColor: isDark ? appColors.blackColor : appColors.white},
      ]}>
      <Image source={blogImg} style={styles.imageView} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageView: {
    height: windowHeight(130),
    width: windowWidth(130),
    resizeMode: 'contain',
  },
});
