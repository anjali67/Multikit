import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  viewContainer: {
    paddingLeft: windowWidth(3),
    paddingRight: windowWidth(0),
    marginTop: windowHeight(8),
    marginHorizontal: windowWidth(14),
  },
  titleStyle: {
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(7),
    color: appColors.ecommorcePrimary,
    marginBottom: windowHeight(3),
  },
  recommendedText: {
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(7),
    color: appColors.ecommorcePrimary,
    marginBottom: windowHeight(3),
    marginVertical: windowHeight(7),
    marginHorizontal: windowWidth(14),
  },
  contentStyle: {
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT20,
    color: appColors.foodContent,
  },
  blankView: {
    height: windowHeight(14),
  },
  marginTop: {
    marginTop: windowHeight(22),
  },
});
