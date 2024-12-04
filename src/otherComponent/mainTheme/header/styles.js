import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    height: '58%',
    backgroundColor: appColors.green,
  },
  innerContainer: {
    marginHorizontal: windowWidth(15),
    marginVertical: windowHeight(12),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  logo: {
    height: windowHeight(25),
    width: windowWidth(110),
    resizeMode: 'contain',
    left: windowWidth(8),
  },
  logoText: {
    fontSize: fontSizes.FONT25,
    color: appColors.white,
    fontFamily: appFonts.MontserratExtraBold,
  },
  blankView: {
    top: windowHeight(30),
    marginHorizontal: windowWidth(20),
  },
  title: {
    fontSize: fontSizes.FONT20,
    color: appColors.white,
    fontFamily: appFonts.MontserratSemiBold,
  },
  subTitle: {
    fontSize: fontSizes.FONT19,
    color: appColors.white,
    fontFamily: appFonts.MontserratRegular,
    top: windowHeight(3),
  },
});
