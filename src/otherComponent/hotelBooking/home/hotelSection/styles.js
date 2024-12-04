import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(15),
    marginTop: windowHeight(12),
  },
  imageStyle: {
    height: windowHeight(150),
    width: windowWidth(280),
    resizeMode: 'cover',
    borderRadius: windowHeight(10),
  },
  name: {
    color: appColors.reviewText,
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.MontserratMedium,
    marginTop: windowHeight(10),
  },
  content: {
    color: appColors.label,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.MontserratRegular,
    marginTop: windowHeight(4),
  },
});
