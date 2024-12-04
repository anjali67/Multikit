import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  checkBox: {
    height: windowHeight(24),
    width: windowWidth(35),
    backgroundColor: appColors.bgColor,
    marginHorizontal: 16,
    borderRadius: windowHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  textStyle: {
    width: '85%',
    color: appColors.cabContent,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.MontserratRegular,
    lineHeight: windowHeight(17),
  },
  underLine: {
    textDecorationLine: 'underline',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
  },
  signInContainer: {
    marginTop: 0,
    marginBottom: windowHeight(4),
  },
  dividerText: {
    textAlign: 'center',
    fontFamily: appFonts.MontserratMedium,
    color: appColors.label,
    backgroundColor: appColors.white,
  },
  margin: {
    marginHorizontal: windowWidth(20),
    marginBottom: windowHeight(20),
    bottom: windowHeight(5),
  },
});
