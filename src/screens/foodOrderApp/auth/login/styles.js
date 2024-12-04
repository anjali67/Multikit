import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  text: {
    marginTop: windowHeight(60),
    fontFamily: appFonts.LatoSemibold,
    color: appColors.foodSecondary,
    fontSize: fontSizes.FONT22,
    marginHorizontal: windowWidth(30),
  },
  blank: {
    height: windowHeight(60),
  },
  loginText: {
    fontFamily: appFonts.LatoSemibold,
    color: appColors.foodSecondary,
    fontSize: fontSizes.FONT23,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: windowHeight(34),
    width: windowWidth(34),
    resizeMode: 'contain',
  },
  fbImage: {
    height: windowHeight(35),
    width: windowWidth(35),
    resizeMode: 'contain',
  },
});
