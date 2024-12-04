import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  imageStyle: {
    height: windowHeight(310),
    width: windowWidth(400),
    borderRadius: windowHeight(10),
  },
  blankView: {
    height: windowHeight(40),
  },
  mainView: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  main: {
    marginHorizontal: windowWidth(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactiveDot: {
    backgroundColor: 'red',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotStyles: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 3,
  },

  title: {
    fontFamily: appFonts.MontserratMedium,
    marginTop: windowHeight(20),
    fontSize: fontSizes.FONT30,
    width: windowWidth(400),
    textAlign: 'center',
    color: appColors.onBoardGradiant,
  },
  content: {
    fontFamily: appFonts.MontserratRegular,
    marginTop: windowHeight(10),
    fontSize: fontSizes.FONT20,
    textAlign: 'center',
    color: appColors.label,
    width: windowWidth(400),
    lineHeight: windowHeight(20),
  },
  bottomView: {
    marginBottom: windowHeight(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipContainer: {
    marginTop: windowHeight(14),
  },
  skipText: {
    color: appColors.reviewText,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.MontserratMedium,
  },
  pagination: {
    marginTop: windowHeight(60),
  },
});
