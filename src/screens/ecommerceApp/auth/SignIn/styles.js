import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  scrollView: {
    paddingBottom: windowHeight(0),
  },
  heading: {
    color: '#3A3A3A',
    fontSize: fontSizes.FONT90,
    fontFamily: appFonts.MontserratExtraBold,
    marginHorizontal: windowWidth(10),
  },
  titleStyle: {
    color: appColors.bgColor,
    fontSize: fontSizes.FONT36,
    fontFamily: appFonts.MontserratMedium,
    marginHorizontal: windowWidth(10),
    marginBottom: windowHeight(12),
    top: windowHeight(-7),
  },
  marginTop: {
    marginTop: windowHeight(10),
  },
  blankView: {
    height: windowHeight(40),
  },
  mainView: {
    marginHorizontal: windowWidth(13),
  },
  forgotView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: windowHeight(-4),
    marginHorizontal: windowWidth(12),
  },
  forgotText: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.MontserratMedium,
    color: appColors.forgotFont,
  },
  blankContainer: {
    height: windowHeight(14),
  },
  accountText: {
    color: '#3A3A3A',
    fontSize: windowWidth(58),
    fontFamily: appFonts.MontserratSemiBold,
    marginLeft: windowWidth(15),
  },
  textStyle: {
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT19,
    textAlign: 'center',
  },
});
