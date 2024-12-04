import {View, Image,StyleSheet} from 'react-native';
import React , {useEffect} from 'react';
import nftStyles from '../style'
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '@App';
import appColors from '@theme/appColors';
import { nftLoader } from '@utils/images/images';

export default function splash({navigation}) {
  const {isDark} = useValues();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('NftOnBoarding');
    }, 3000);
  }, []);
  return (
   <View style={[nftStyles.container,{backgroundColor:appColors.nftBg},nftStyles.center]}>
     <Image source={nftLoader} style={styles.imageView} />
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
