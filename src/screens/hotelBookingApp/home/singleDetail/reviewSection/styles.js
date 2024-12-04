import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  gradiantView: {
    marginHorizontal: windowWidth(20),
    paddingHorizontal: windowHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(6),
    paddingVertical: windowHeight(10),
  },
  main: {
    marginTop: windowHeight(14),
    flexDirection: 'row',
  },
  reviewText: {
    color: appColors.white,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT22,
  },
  textStyle: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT18,
    marginTop: windowHeight(2),
  },
  progressContainer: {
    height: windowHeight(5),
    backgroundColor: appColors.reviewsBg,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
    width: windowWidth(430),
    marginHorizontal: windowHeight(7),
    marginVertical: windowHeight(4),
  },
  progressBar: {
    height: '100%',
    backgroundColor: appColors.onBoardGradiant,
    borderRadius: windowHeight(20),
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(8),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(20),
  },
  margin: {
    marginTop: windowHeight(18),
  },
  name: {
    color: appColors.label,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT19HALF,
  },
  mainContainer: {
    marginBottom: windowHeight(5),
  },
  headingTitle: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT20,
    marginHorizontal: windowWidth(20),
    marginVertical: windowHeight(10),
  },
});
