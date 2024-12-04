import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default style = StyleSheet.create({
  forgotView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

    marginHorizontal: windowWidth(5),
    marginBottom: windowHeight(2),
  },
  forgotText: {
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.LatoSemibold,
    color: appColors.fontColor,
    opacity: 0.6,
  },
});
