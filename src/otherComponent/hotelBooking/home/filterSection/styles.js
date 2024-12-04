import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  title: {
    color: appColors.reviewText,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.MontserratMedium,
  },
  topView: {
    marginTop: windowHeight(6),
  },

  linearGradient: {
    top: windowHeight(7),
    marginRight: windowWidth(13),
    height: windowWidth(52),
    marginVertical: windowHeight(8),
    borderRadius: windowHeight(5), // <-- Outer Border Radius
  },
  innerContainer: {
    borderRadius: windowHeight(5), // <-- Inner Border Radius
    flex: 1,
    margin: 1.5,
    justifyContent: 'center',
    paddingHorizontal: windowWidth(17),
  },
});
