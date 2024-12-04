import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: windowWidth(20),
  },
  imageStyle: {
    height: windowHeight(168),
    width: '99.6%',
  },
  textContainer: {
    marginHorizontal: windowHeight(10),
    marginVertical: windowHeight(25),
  },
  textStyle: {
    backgroundColor: appColors.ecommorcePrimary,
    padding: windowHeight(4.5),
    textAlign: 'center',

    borderBottomRightRadius: windowHeight(0),
    borderBottomLeftRadius: windowHeight(0),
    color: appColors.white,
    fontFamily: appFonts.MontserratSemiBold,
    textTransform: 'uppercase',
  },
  text: {
    borderTopLeftRadius: windowHeight(0),
    borderBottomLeftRadius: windowHeight(4),
    borderBottomRightRadius: windowHeight(4),
  },
  discount: {
    color: appColors.white,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
    marginVertical: windowHeight(6),
  },
  shop: {
    color: appColors.forgotFont,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT19,
  },
});
