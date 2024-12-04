import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default chattingStyles = StyleSheet.create({
  buttonStyle: {
    borderRadius: windowWidth(30),
    height: windowHeight(44),
    backgroundColor: appColors.white,
    width: '90%',
    marginTop: windowHeight(20),
  },
  btn: {
    fontFamily: appFonts.RubikMedium,
    color: appColors.chatText,
    fontSize: fontSizes.FONT20,
  },
  mainContainer: {
    flex: 1,
  },
  otpInput: {
    borderBottomWidth: 1.5,
    width: windowWidth(100),
    height: windowHeight(49),
    bottom: windowHeight(20),
    marginHorizontal: windowWidth(0),
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(20),
  },
});
