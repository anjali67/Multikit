import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import {fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginVertical: windowHeight(10),
    backgroundColor: appColors.reviewsBg,
    width: '100%',
    paddingVertical: windowHeight(8),
    borderRadius: windowHeight(7.8),
    paddingHorizontal: windowWidth(20),
  },
  inputContainer: {
    fontFamily: appFonts.MontserratMedium,
    color: appColors.reviewText,
    fontSize: fontSizes.FONT20,
    right: windowWidth(6),
    paddingVertical: windowHeight(0),
  },
  label: {
    fontFamily: appFonts.MontserratRegular,
    color: appColors.label,
    fontSize: fontSizes.FONT18HALF,
    marginTop: windowHeight(2),
  },
});
