import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    borderRadius: windowWidth(26),
  },
  image: {
    width: windowWidth(100),
    height: windowHeight(85),
    resizeMode: 'contain',
    marginHorizontal: windowWidth(6),
  },
  title: {
    fontSize: fontSizes.FONT21,
    color: appColors.black,
    fontFamily: appFonts.LatoSemibold,
    bottom: windowHeight(6),
    alignSelf: 'center',
  },
});
