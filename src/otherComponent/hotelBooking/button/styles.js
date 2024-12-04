import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default Styles = StyleSheet.create({
  mainView: {
    marginTop: windowHeight(6),
  },
  btn: {
    borderRadius: windowHeight(8),
    width: windowWidth(420),
    paddingVertical: windowHeight(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: appColors.white,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT21,
    opacity: 0.9,
  },
});
