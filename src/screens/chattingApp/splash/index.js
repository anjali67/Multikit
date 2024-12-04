import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {chatLoader} from '@utils/images/images';
import {GlobalStyle} from '../../../style';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function ChattingSplash({navigation}) {
  const {isDark} = useValues();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ChatOnBoarding');
    }, 3000);
  }, []);

  return (
    <View
      style={[
        GlobalStyle.center,
        {backgroundColor: isDark ? appColors.gray : appColors.white},
      ]}>
      <Image source={chatLoader} style={styles.imageView} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageView: {
    height: windowHeight(110),
    width: windowWidth(110),
    resizeMode: 'contain',
  },
});
