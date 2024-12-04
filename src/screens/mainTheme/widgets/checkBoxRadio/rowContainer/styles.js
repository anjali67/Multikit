import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: windowWidth(15),
    marginHorizontal: 6,
    alignItems: 'center',
  },
  radioBtn: {
    height: windowWidth(24),
    width: windowWidth(24),
    backgroundColor: appColors.verticalLine,
    borderRadius: windowWidth(20),
    marginRight: windowWidth(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    marginBottom: windowWidth(30),
  },
  name: {
    marginHorizontal: windowWidth(10),
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT20,
    marginBottom: 7,
  },
  innerCircle: {
    height: windowWidth(10),
    width: windowWidth(10),
    backgroundColor: appColors.green,
    borderRadius: windowWidth(20),
  },
});
