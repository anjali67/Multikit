import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  button: {
    borderRadius: windowHeight(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight(40),
  },
  buttonText: {
    fontSize: fontSizes.FONT22,
    marginLeft: windowWidth(10),
    fontFamily: appFonts.PublicSansBold,
  },
});
