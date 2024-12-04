import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default foodOrderStyles = StyleSheet.create({
  textStyle: {
    left: windowWidth(10),
    color: appColors.black,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT20,
    marginTop: windowHeight(10),
  },
  seeAllStyle: {
    color: appColors.foodBtn,
    fontFamily: appFonts.LatoSemibold,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(10),
  },
  rowStyle: {
    justifyContent: 'space-between',
  },
  mainView: {
    marginHorizontal: windowWidth(20),
    marginBottom: windowWidth(10),
    marginTop: windowHeight(3),
  },
  row: {
    backgroundColor: appColors.white,
    paddingHorizontal: windowHeight(12),
    borderRadius: windowHeight(6),
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(10),
    paddingVertical: windowHeight(8),
  },
  scrollView: {
    marginTop: windowHeight(10),
    right: windowWidth(10),
    marginHorizontal: windowWidth(3),
  },
  offerImg: {
    height: windowHeight(29),
    width: windowWidth(36),
    resizeMode: 'contain',
    margin: windowHeight(4),
    right: windowWidth(7),
  },
  content: {
    color: appColors.foodContent,
    fontFamily: appFonts.LatoRegular,
    fontSize: fontSizes.FONT19,
    marginTop: windowHeight(3),
  },
  title: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT20,
  },
});
