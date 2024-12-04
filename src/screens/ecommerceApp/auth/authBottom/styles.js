import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  btnStyle: {
    width: '96%',
    backgroundColor: appColors.white,
    marginTop: windowHeight(30),
    borderRadius: windowHeight(5),
    height: windowHeight(42),
  },
  btn: {
    color: appColors.ecommerceFont,
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.MontserratSemiBold,
  },
  signInView: {
    marginTop: windowHeight(22),
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight(20),
    marginBottom: windowHeight(7),
  },
  img: {
    width: windowWidth(430),
    height: windowHeight(2.4),
  },
  orText: {
    textAlign: 'center',
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT19,
    color: appColors.subTitle,
    position: 'absolute',
    marginHorizontal: windowWidth(30),
    padding: windowHeight(8),
    backgroundColor: appColors.ecommorcePrimary,
  },
  blank: {
    height: windowHeight(36),
  },
  textStyle: {
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT19,
    marginBottom: windowHeight(10),
  },
});
