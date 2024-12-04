import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default sliderStyles = StyleSheet.create({
  starView: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(20),
    marginTop: windowWidth(10),
  },
  textStyle: {
    fontFamily: appFonts.MontserratRegular,
    color: appColors.subTitle,
    marginHorizontal: windowWidth(3),
    fontSize: fontSizes.FONT16HALF,
  },
  titleStyle: {
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT21,
    color: appColors.ecommorcePrimary,
  },
  scrollView: {
    paddingBottom: windowHeight(120),
  },
});
