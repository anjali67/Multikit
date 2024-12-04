import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default financialStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.gradient2,
  },
  inputContainer: {
    paddingVertical: windowHeight(6),
    backgroundColor: appColors.inputBg,
    marginTop: windowHeight(40),
    marginHorizontal: windowWidth(21),
    borderColor: appColors.fontColor,
    borderWidth: 1,
    borderRadius: windowHeight(20),
  },
  divider: {
    width: '100%',
    height: 1,
    borderTopColor: appColors.fontColor,
    borderWidth: 1,
    marginVertical: windowHeight(3),
  },
  btnStyle: {
    width: '90%',
    backgroundColor:appColors.gradient1,
    marginTop: windowHeight(30),
    borderRadius: windowHeight(8),
    height: windowHeight(45),
    opacity: 0.8,
  },
  btn: {
    color: appColors.gray,
    fontSize: fontSizes.FONT23,
    fontFamily: appFonts.InterRegular,
    opacity: 0.9,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: appColors.white,
    fontSize: fontSizes.FONT20HALF,
    fontFamily: appFonts.InterMedium,
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(18),
    opacity: 0.7,
  },
  textStyle: {
    color: appColors.white,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT22,
    marginTop: windowHeight(10),
    opacity: 0.8,
  },
  seeAllStyle: {
    color: appColors.gradient1,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT19,
    marginTop: windowHeight(10),
    opacity: 0.8,
  },
  scrollView: {
    paddingBottom: windowHeight(40),
  },
});
