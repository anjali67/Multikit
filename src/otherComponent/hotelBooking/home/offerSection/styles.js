import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(5),
    marginHorizontal: windowWidth(18),
  },
  image: {
    height: windowHeight(180),
    width: windowWidth(450),
    resizeMode: 'stretch',
  },
  textContainer: {
    margin: windowHeight(10),
    marginTop: windowHeight(30),
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
    marginTop: windowHeight(8),
  },
  title: {
    fontSize: fontSizes.FONT20,
    color: appColors.white,
    fontFamily: appFonts.MontserratMedium,
  },
  content: {
    fontSize: fontSizes.FONT16,
    color: appColors.white,
    fontFamily: appFonts.MontserratRegular,
    opacity: 0.8,
    marginTop: windowHeight(8),
    width: windowWidth(220),
    lineHeight: windowHeight(19),
  },
  coupon: {
    fontSize: fontSizes.FONT18,
    color: appColors.white,
    fontFamily: appFonts.MontserratRegular,
    opacity: 0.8,
  },
  couponContent: {
    fontSize: fontSizes.FONT18,
    color: appColors.white,
    fontFamily: appFonts.MontserratMedium,
  },
});
