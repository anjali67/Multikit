import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.white,
    paddingTop: windowHeight(14),
  },
  textStyle: {
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT19,
  },
  mail: {
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratRegular,
  },
  logoutView: {
    borderColor: appColors.forgotFont,
    borderWidth: 1,
    right: windowHeight(4),
    width: '90%',
  },
  profileView: {
    margin: windowHeight(12),
  },
});
