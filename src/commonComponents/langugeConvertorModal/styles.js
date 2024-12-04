import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '../../theme/appColors';
import appFonts from '../../theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  wrap: {
    padding: 20,
    margin: 20,
    borderRadius: 8,
    backgroundColor: appColors.white,
    elevation: 10,
    height: windowHeight(200),
    width: windowWidth(280),
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
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
  row: {
    flexDirection: 'row',
    paddingBottom: windowHeight(20),
  },
  name: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT18HALF,
    marginHorizontal: 10,
  },
  innerCircle: {
    height: windowWidth(10),
    width: windowWidth(10),
    backgroundColor: appColors.green,
    borderRadius: windowWidth(20),
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
});
