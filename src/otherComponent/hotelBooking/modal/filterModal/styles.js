import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    backgroundColor: appColors.reviewsBg,
    padding: windowHeight(20),
    justifyContent: 'space-between',
  },
  textStyle: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT21,
  },
  text: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
    marginVertical: windowHeight(8),
  },
  margin: {
    marginHorizontal: windowHeight(8),
    marginVertical: windowHeight(10),
  },
  topView: {
    marginTop: windowHeight(20),
  },
  title: {
    color: appColors.reviewText,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.MontserratMedium,
  },
  containerView: {
    backgroundColor: appColors.reviewsBg,
    paddingHorizontal: windowHeight(20),
    paddingVertical: windowHeight(9),
    borderRadius: windowHeight(3),
    marginRight: windowWidth(20),
  },
  main: {
    marginTop: windowHeight(12),
  },
  name: {
    color: appColors.reviewText,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.MontserratMedium,
  },
  row: {
    flexDirection: 'row',
    padding: windowHeight(9),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnView: {
    width: windowWidth(220),
    paddingVertical: windowHeight(9),
  },
  resetText: {
    color: appColors.reviewText,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.MontserratMedium,
    marginHorizontal: windowHeight(14),
    marginTop: windowHeight(4),
  },
  linearGradientStyle: {
    height: windowHeight(32),
  },
});
