import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    flex: 1,
  },
  img: {
    height: windowHeight(190),
    width: windowWidth(260),
    resizeMode: 'contain',
  },
  title: {
    fontSize: fontSizes.FONT22,
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratMedium,
    textAlign: 'center',
    lineHeight: windowHeight(23),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: fontSizes.FONT18,
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratMedium,
  },
  content: {
    fontSize: fontSizes.FONT18,
    color: appColors.label,
    fontFamily: appFonts.MontserratRegular,
    marginTop: windowHeight(6),
  },
  container: {
    marginTop: windowHeight(20),
  },
  contentStyle: {
    width: windowWidth(180),
    lineHeight: windowHeight(18),
  },
});
