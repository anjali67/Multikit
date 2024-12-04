import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainView: {
    marginBottom: windowHeight(12),
  },
  blankView: {
    height: windowHeight(6),
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(12),
    marginBottom: windowHeight(17),
  },
  accountText: {
    fontFamily: appFonts.MontserratRegular,
    color: appColors.label,
    fontSize: fontSizes.FONT19,
  },
});
