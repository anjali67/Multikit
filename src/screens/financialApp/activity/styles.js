import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

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
    flex: 1,
    fontSize: fontSizes.FONT20,
    left: windowWidth(9),
  },
  top: {
    marginTop: windowHeight(2),
  },
  mainContainer: {
    paddingBottom: windowHeight(6),
  },
});
