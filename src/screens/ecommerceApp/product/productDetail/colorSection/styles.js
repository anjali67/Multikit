import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(19),
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: windowHeight(54),
    width: windowWidth(78),
    borderRadius: windowHeight(7),
    marginHorizontal: windowWidth(8),
    opacity: 0.5,
    borderColor: appColors.forgotFont,
  },
  textStyle: {
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratMedium,
    marginHorizontal: windowWidth(6),
    fontSize: fontSizes.FONT19,
  },
});
