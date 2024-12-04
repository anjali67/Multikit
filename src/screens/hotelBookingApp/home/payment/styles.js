import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    marginTop: windowHeight(10),
    marginHorizontal: windowWidth(20),
  },
  title: {
    fontSize: fontSizes.FONT20,
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratSemiBold,
  },
  mainView: {
    backgroundColor: appColors.white,
    marginTop: windowHeight(4),
    padding: windowHeight(12),
    borderRadius: windowHeight(8),
  },
  blankView: {
    height: windowHeight(13),
  },
});
