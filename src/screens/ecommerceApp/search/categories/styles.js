import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    marginHorizontal: windowHeight(8),
    marginTop: windowHeight(12),
  },
  container: {
    paddingVertical: windowHeight(8),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: appColors.bgColor,
    paddingHorizontal: windowWidth(19),
    justifyContent: 'center',
    borderRadius: windowWidth(8),
    marginHorizontal: windowWidth(5),
  },
  title: {
    marginHorizontal: windowWidth(8),
    fontSize: fontSizes.FONT17,
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratMedium,
  },
});
