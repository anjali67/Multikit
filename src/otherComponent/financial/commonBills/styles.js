import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: appColors.financeBg,
    borderRadius: windowHeight(20),
    borderColor: appColors.fontColor,
    borderWidth: 0.9,
    height: windowHeight(44),
    marginTop: windowHeight(4),
  },
  textInput: {
    fontFamily: appFonts.InterRegular,
    textAlign: 'left',
    width: windowWidth(390),
    fontSize: fontSizes.FONT20,
    left: windowWidth(0),
  },
  top: {
    marginTop: windowHeight(2),
  },
  mainContainer: {
    paddingBottom: windowHeight(6),
  },
  blankView: {
    height: windowHeight(13),
  },
  title: {
    marginHorizontal: windowHeight(20),
    color: appColors.financeContent,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT20,
    opacity: 0.7,
    marginBottom: windowHeight(13),
  },
  container: {
    paddingVertical: windowHeight(8),
  },
  nameStyle: {
    fontSize: fontSizes.FONT18HALF,
    marginTop: windowHeight(8),
  },
  imageStyle: {
    height: windowHeight(40),
    width: windowWidth(48),
    resizeMode: 'contain',
  },
});
