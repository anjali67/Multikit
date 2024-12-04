import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  title: {
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT20,
    color: appColors.ecommorcePrimary,
    marginVertical: windowHeight(2),
  },
  blankView: {
    height: windowHeight(10),
  },
  nameStyle: {
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratMedium,
  },
  emailStyle: {
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratRegular,
  },
  name: {
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratMedium,
  },
  divider: {
    backgroundColor: appColors.border,
  },
  bottomView: {
    borderColor: appColors.forgotFont,
    borderWidth: 1,
  },
  logoutStyle: {
    color: appColors.ecommerceFont,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.MontserratMedium,
  },
  scrollView: {
    paddingBottom: windowHeight(80),
  },
  btnStyle: {
    width: '90%',
    borderColor: appColors.forgotFont,
    borderRadius: windowHeight(6),
  },
  mainContainer: {
    marginTop: windowHeight(0),
    paddingBottom: windowHeight(20),
  },
  titleStyle: {
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT18,
  },
});
