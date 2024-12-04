import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  main: {
    bottom: windowHeight(15),
  },
  mainView: {
    backgroundColor: appColors.white,
    flexDirection: 'row',
    paddingHorizontal: windowHeight(9),
    marginHorizontal: windowWidth(20),
    elevation: 0.6,
    paddingVertical: windowHeight(12),
    borderRadius: windowHeight(6),
  },
  vertical: {
    height: '65%',
    width: 1.1,
    backgroundColor: appColors.gray,
    marginTop: windowHeight(7),
    marginRight: windowWidth(16),
    marginLeft: windowWidth(2),
  },
  text: {
    marginRight: windowWidth(30),
    marginTop: windowHeight(4),
    marginLeft: windowWidth(13),
    color: appColors.reviewText,
    fontSize: fontSizes.FONT19HALF,
    fontFamily: appFonts.MontserratMedium,
  },
  mainContainer: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(20),
  },
  title: {
    color: appColors.reviewText,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.MontserratMedium,
  },
  content: {
    color: appColors.label,
    fontSize: fontSizes.FONT18HALF,
    fontFamily: appFonts.MontserratRegular,
    marginTop: windowHeight(6),
    width: windowWidth(450),
    marginRight: windowWidth(30),
    lineHeight: windowHeight(18),
  },
  top: {
    marginTop: windowHeight(5),
  },
  arrowView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  downArrow: {
    bottom: windowHeight(23),
    padding: windowHeight(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    marginTop: windowHeight(4),
  },
  mainViewStyle: {
    borderRadius: windowHeight(0),
    marginHorizontal: windowWidth(25),
    paddingVertical: windowHeight(10),
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: windowHeight(2),
    borderRadius: windowHeight(0),
  },
  textStyle: {
    left: windowWidth(10),
    bottom: windowHeight(2),
    fontFamily: appFonts.MontserratMedium,
  },
});
