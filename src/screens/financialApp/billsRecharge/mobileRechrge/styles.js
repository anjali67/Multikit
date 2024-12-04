import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: windowHeight(13),
    padding: windowHeight(12),
  },
  mobileView: {
    backgroundColor: appColors.inputBg,
    padding: windowHeight(10),
    borderRadius: windowHeight(10),
    borderWidth: 0.7,
    borderColor: appColors.fontColor,
    color: appColors.gray,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.InterRegular,
    opacity: 0.7,
    marginRight: windowWidth(20),
    width: windowWidth(70),
  },
  inputContainer: {
    width: '75%',
  },
  title: {
    marginHorizontal: windowHeight(20),
    color: appColors.financeContent,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT20,
    opacity: 0.7,
    marginBottom: windowHeight(3),
  },
  nameStyle: {
    opacity: 0.7,
    fontSize: fontSizes.FONT20,
  },
  textStyle: {
    color: appColors.inActiveIcon,
  },
});
