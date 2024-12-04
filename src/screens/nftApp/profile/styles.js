import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  title: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT22,
    color: appColors.nftTitle,
    marginVertical: 10,
  },
  content: {
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT17,
    color: appColors.nftTitle,
    marginHorizontal: windowWidth(30),
    textAlign: 'center',
  },
  image: {
    height: windowHeight(130),
    width: windowWidth(260),
    marginTop: 20,
    resizeMode: 'cover',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    marginHorizontal: windowWidth(25),
    marginTop: 3,
  },
  imageStyle: {
    height: windowHeight(40),
    width: windowWidth(40),
    resizeMode: 'contain',
  },
});
