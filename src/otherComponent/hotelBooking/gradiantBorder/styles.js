import {fontSizes} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default Styles = StyleSheet.create({
  linearGradient: {
    top: windowHeight(8),
    marginRight: windowWidth(12),
    height: windowWidth(65),
    borderRadius: windowHeight(6), // <-- Outer Border Radius
    marginBottom: windowHeight(9),
  },
  innerContainer: {
    borderRadius: windowHeight(6), // <-- Inner Border Radius
    flex: 1,
    margin: 1.5,
    justifyContent: 'center',
    paddingHorizontal: windowWidth(20),
    backgroundColor: appColors.white,
  },
  name: {
    color: appColors.reviewText,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.MontserratMedium,
    textAlign: 'center',
    marginHorizontal: windowWidth(8),
    marginTop: windowHeight(1.6),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconView: {
    color: appColors.blackColor,
    fontSize: fontSizes.FONT18HALF,
    fontFamily: appFonts.MontserratMedium,
  },
});
