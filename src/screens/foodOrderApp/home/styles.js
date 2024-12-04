import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  scrollView: {
    paddingBottom: windowHeight(40),
  },
  container: {
    marginTop: windowHeight(10),
    height: windowHeight(170),
  },
  rowStyle: {
    justifyContent: 'space-between',
  },
  textStyle: {
    left: windowWidth(10),
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT20,
    marginTop: windowHeight(10),
  },
  seeAllStyle: {
    color: appColors.foodBtn,
    fontFamily: appFonts.LatoSemibold,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(10),
  },
  scrollViewStyle: {
    paddingVertical: windowHeight(4),
    marginTop: windowHeight(8),
  },
});
