import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  btnStyle: {
    marginTop: windowHeight(0),
    height: windowHeight(43),
  },
  skipText: {
    fontSize: fontSizes.FONT20,
    color: appColors.financeContent,
    fontFamily: appFonts.InterMedium,
    marginTop: windowHeight(18),
  },
  btnText: {
    opacity: null,
    fontFamily: appFonts.InterMedium,
    color: appColors.white,
  },
});
