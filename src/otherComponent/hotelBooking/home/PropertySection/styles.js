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
    marginTop: windowHeight(8),
  },
  image: {
    height: windowHeight(34),
    width: windowWidth(34),
    resizeMode: 'contain',
    left: windowWidth(15),
  },
  row: {
    flexDirection: 'row',
    marginVertical: windowWidth(15),
    backgroundColor: appColors.reviewsBg,
    borderRadius: windowHeight(4),
    paddingHorizontal: windowWidth(1.4),
    paddingVertical: windowHeight(1),
  },
  top: {
    marginTop: windowHeight(10),
    marginHorizontal: windowWidth(30),
    fontSize: fontSizes.FONT19HALF,
  },
});
