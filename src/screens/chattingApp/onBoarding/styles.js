import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: appColors.chattingBg,
  },
  mainContainer: {
    marginTop: windowHeight(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  createText: {
    color: appColors.chatContent,
    fontFamily: appFonts.RubikMedium,
    fontSize: fontSizes.FONT20,
  },
  marginTop: {
    marginTop: windowHeight(10),
  },
  btn: {
    marginTop: windowHeight(40),
  },
  titleStyle: {
    fontSize: fontSizes.FONT32,
    textAlign: 'center',
  },
  contentStyle: {
    textAlign: 'center',
  },
});
