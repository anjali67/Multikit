import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  name: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratMedium,
    marginHorizontal: windowWidth(13),
    fontSize: fontSizes.FONT19HALF,
    marginTop: windowHeight(1),
  },
  content: {
    fontFamily: appFonts.MontserratMedium,
    color: appColors.label,
    fontSize: fontSizes.FONT18HALF,
  },
  rowStyle: {
    justifyContent: 'space-between',
    marginTop: windowHeight(6),
  },
  mainContainer: {
    marginVertical: windowHeight(20),
    marginHorizontal: windowWidth(15),
  },
  margin: {
    marginHorizontal: windowWidth(20),
  },
});
