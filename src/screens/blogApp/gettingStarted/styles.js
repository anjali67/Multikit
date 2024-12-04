import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import {windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  btnStyle: {
    borderWidth: 0,
  },
  titleStyle: {
    color: 'red',
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT20,
    marginHorizontal: 5,
  },
  button: {
    width: windowWidth(420),
  },
});
