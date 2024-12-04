import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  main: {
    height: windowHeight(43.8),
    borderRadius: windowHeight(12),
    flexDirection: 'row',
    marginHorizontal: windowWidth(20),
    borderBottomWidth: 2,
    borderBottomColor: appColors.borderColor,
    marginTop: windowHeight(20),
  },
  label: {
    color: appColors.white,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT21HALF,
  },
  labelView: {
    height: windowHeight(39),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: windowHeight(10),
    marginHorizontal: windowWidth(10),
    right: windowWidth(10),
    width: windowWidth(20),
  },
  containerView: {
    borderBottomColor: appColors.nftBg,
  },
});
