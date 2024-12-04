import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: windowHeight(20),
    paddingVertical: windowHeight(35),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(30),
  },
  title: {
    textAlign: 'center',
    fontSize: fontSizes.FONT24,
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratMedium,
    marginBottom: windowHeight(20),
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: appFonts.MontserratMedium,
    color: appColors.label,
    backgroundColor: appColors.white,
  },
  signInContainer: {
    marginTop: 0,
    marginBottom: windowHeight(5),
  },
  mainContainer: {
    backgroundColor: appColors.reviewsBg,
    borderRadius: windowHeight(7),
    marginBottom: windowHeight(0),
    paddingVertical: windowHeight(3),
  },
  btnStyle: {
    borderWidth: 0,
  },
  titleStyle: {
    color: appColors.reviewText,
  },
  imageStyle: {
    height: windowHeight(27),
    width: windowWidth(27),
  },
});
