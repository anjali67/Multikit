import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {windowWidth} from '@theme/appConstant';

export default fitnessStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: appColors.white,
    marginTop: windowHeight(17),
    borderRadius: windowHeight(5),
    height: windowHeight(44),
    width: windowWidth(430),
  },
  btn: {
    color: appColors.fontColor,
    fontSize: fontSizes.FONT24,
    fontFamily: appFonts.NunitoSansRegular,
  },
  loginStyle: {
    width: '98%',
    marginTop: windowHeight(20),
    borderRadius: windowHeight(40),
    height: windowHeight(50),
    borderColor: appColors.white,
    borderWidth: 1,
  },
  loginBtn: {
    color: appColors.white,
    fontSize: fontSizes.FONT26,
    fontFamily: appFonts.NunitoSansRegular,
  },
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
});
