import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  textInputContainer: {
    width: '88%',
    backgroundColor: appColors.white,
    borderWidth: 0,
  },
  inputStyle: {
    width: windowWidth(340),
    fontFamily: appFonts.MontserratRegular,
    paddingLeft: windowWidth(10),
  },
  title: {
    marginHorizontal: windowWidth(22),
    marginVertical: windowWidth(8),
    color: appColors.white,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT26,
  },
  bottom: {
    bottom: windowHeight(20),
  },
});
