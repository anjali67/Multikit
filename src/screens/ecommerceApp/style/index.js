import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';

export default ecommerceStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.ecommorcePrimary,
  },
  buttonStyle: {
    width: '88%',
    backgroundColor: appColors.white,
    marginTop: windowHeight(25),
    borderRadius: windowHeight(5),
    height: windowHeight(42),
  },
  btn: {
    color: appColors.ecommerceFont,
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.MontserratSemiBold,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'centers',
  },
  mainView: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  title: {
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT20,
    color: appColors.ecommorcePrimary,
    marginVertical: windowHeight(2),
  },
  scrollView: {
    paddingBottom: windowHeight(120),
  },
});
