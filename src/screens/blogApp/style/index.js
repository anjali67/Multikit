import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import {windowWidth} from '@theme/appConstant';

export default blogStyles = StyleSheet.create({
  buttonStyle: {
    width: '91%',
    marginTop: windowHeight(13),
    borderRadius: windowHeight(5),
    height: windowHeight(44),
  },
  btn: {
    color: appColors.white,
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.MontserratMedium,
    opacity: 0.8,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  blankView: {
    height: windowHeight(20),
  },
  title: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT20,
  },
  imageStyle: {
    height: windowHeight(180),
    width: windowWidth(500),
  },
  innerContainer: {
    height: windowHeight(170),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
