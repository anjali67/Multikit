import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default style = StyleSheet.create({
  forgotView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

    marginHorizontal: windowWidth(22),
    marginBottom: windowHeight(8),
  },
  forgotText: {
    fontSize: fontSizes.FONT17HALF,
    fontFamily: appFonts.MontserratSemiBold,
    color: appColors.fontColor,
  },
  text: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.MontserratMedium,
    color: appColors.white,
    textAlign: 'center',
    marginTop: windowHeight(15),
  },
  buttonView: {
    borderRadius: windowHeight(15),
    marginTop: windowHeight(20),
  },
});
