import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    marginTop: windowHeight(60),
    fontFamily: appFonts.LatoSemibold,
    color: appColors.foodSecondary,
    fontSize: fontSizes.FONT22,
    marginHorizontal: windowWidth(30),
  },
  cenetr: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: windowHeight(40),
  },
});
