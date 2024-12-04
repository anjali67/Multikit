import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '../../../../theme/appConstant';

export default styles = StyleSheet.create({
  imageStyle: {
    height: windowHeight(48),
    width: windowWidth(110),
    resizeMode: 'contain',
  },
  container: {
    marginTop: windowHeight(80),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: appColors.white,
    marginTop: windowHeight(14),
    fontSize: fontSizes.FONT26,
    fontFamily: appFonts.InterRegular,
    opacity: 0.9,
  },
  content: {
    color: appColors.financeContent,
    marginTop: windowHeight(7),
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.InterRegular,
    opacity: 0.9,
  },
});
