import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appFonts from '../../theme/appFonts';
import appColors from '../../theme/appColors';

export default styles = StyleSheet.create({
  inputView: {
    height: windowHeight(50),
    borderRadius: windowHeight(100),
    alignSelf: 'center',
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.PublicSansRegular,
    justifyContent: 'center',
    borderWidth: 0.4,
    backgroundColor: 'white',
    elevation: 3,
  },
  input: {
    height: windowHeight(50),
    fontSize: fontSizes.FONT19,
  },
  leftIcon: {
    position: 'absolute',
    left: windowWidth(20),
  },
  rightIcon: {
    position: 'absolute',
    right: windowWidth(20),
  },
  text: {
    color: appColors.primary,
    fontSize: fontSizes.FONT18,
  },
});
