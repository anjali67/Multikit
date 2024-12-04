import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  viewContainer: {
    paddingLeft: windowWidth(3),
    paddingRight: windowWidth(0),
    marginTop: windowHeight(8),
  },
  titleStyle: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(7),
    left: windowWidth(3),
    color: appColors.foodSecondary,
    marginBottom: windowHeight(6),
  },
  contentStyle: {
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT20,
    color: appColors.foodContent,
    marginHorizontal: windowWidth(10),
  },
  blankView: {
    height: windowHeight(14),
  },
  marginTop: {
    marginTop: windowHeight(22),
  },
});
