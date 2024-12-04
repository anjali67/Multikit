import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import {windowWidth} from '@theme/appConstant';

export default foodOrderStyles = StyleSheet.create({
  otpTextInput: {
    backgroundColor: appColors.white,
    borderRadius: 12,
    width: windowWidth(75),
    height: windowHeight(50),
    borderBottomWidth: 0,
    color: appColors.foodContent,
    fontFamily: appFonts.LatoRegular,
    borderBottomColor: appColors.white,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(60),
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: windowHeight(22),
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpText: {
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT20,
    color: appColors.foodContent,
    height: windowHeight(20),
  },
  resand: {
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT21,
    color: appColors.foodBtn,
    height: windowHeight(20),
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: windowHeight(40),
  },
  mainView: {
    justifyContent: 'space-between',
    flex: 1,
  },
});
