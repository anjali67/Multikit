import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default chattingStyles = StyleSheet.create({
  container: {
    marginRight: windowWidth(16),
  },
  image: {
    height: windowHeight(50),
    width: windowHeight(50),
    resizeMode: 'contain',
    borderRadius: windowHeight(30),
    borderColor: appColors.chatContent,
  },
  name: {
    color: appColors.chatText,
    fontFamily: appFonts.RubikRegular,
    fontSize: fontSizes.FONT17HALF,
    textAlign: 'center',
    marginTop: windowHeight(3),
  },
  mainView: {
    position: 'absolute',
    bottom: 0,
    width: windowWidth(70),
    height: windowHeight(25),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: windowHeight(18),
    left: windowWidth(10),
    bottom: windowHeight(3),
  },
  circleView: {
    height: windowHeight(22),
    width: windowWidth(33),
    borderRadius: windowHeight(30),
    backgroundColor: appColors.chatText,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    fontSize: fontSizes.FONT22,
    color: appColors.white,
    fontFamily: appFonts.RubikRegular,
  },
});
