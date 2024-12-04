import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  title: {
    marginTop: windowHeight(20),
    marginHorizontal: windowWidth(20),
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT20,
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(0),
  },
  top: {
    marginTop: windowHeight(24),
  },
});
