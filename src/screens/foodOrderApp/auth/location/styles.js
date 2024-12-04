import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '../../../../theme/appConstant';
import appFonts from '../../../../theme/appFonts';
import appColors from '../../../../theme/appColors';

export default styles = StyleSheet.create({
  contentStyle: {
    fontSize: fontSizes.FONT22,
    textAlign: 'center',
    fontFamily: appFonts.LatoRegular,
    color: appColors.foodContent,
    marginTop: windowHeight(15),
  },
  map: {
    height: '53%',
    width: '65%',
    resizeMode: 'contain',
    marginTop: windowHeight(20),
  },
  btnStyle: {
    width: '88%',
    backgroundColor: appColors.white,
    marginTop: windowHeight(25),
    borderRadius: windowHeight(12),
    height: windowHeight(42),
  },
  btn: {
    color: appColors.foodSecondary,
    fontSize: fontSizes.FONT23,
    fontFamily: appFonts.LatoSemibold,
  },
});
