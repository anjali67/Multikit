import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: appColors.ecommorcePrimary,
    padding: windowHeight(7),
    paddingHorizontal: windowWidth(40),
  },
  mainView: {
    margin: windowHeight(7),
    backgroundColor: appColors.white,
    paddingHorizontal: windowWidth(25),
    paddingVertical: windowHeight(6.8),
    borderRadius: windowHeight(3),
    left: windowWidth(28),
  },
  cartText: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT19,
    color: appColors.ecommerceFont,
  },
  text: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT16HALF,
    marginTop: windowHeight(2),
    color: appColors.subTitle,
    borderBottomColor: appColors.subTitle,
    borderBottomWidth: 1,
  },
  price: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
    marginVertical: windowHeight(1),
    color: appColors.subTitle,
  },
  textView: {
    marginTop: windowHeight(7),
    right: windowWidth(8),
    bottom: windowHeight(4),
  },
});
