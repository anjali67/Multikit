import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default sliderStyles = StyleSheet.create({
  mainView: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(17),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: windowHeight(18),
  },
  textStyle: {
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratMedium,
    marginHorizontal: windowWidth(6),
    fontSize: fontSizes.FONT19,
  },
  mainContainer: {
    backgroundColor: appColors.bgColor,
    paddingVertical: windowHeight(8),
    paddingHorizontal: windowWidth(13),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth(6),
    marginLeft: windowWidth(14),
  },
  text: {
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratMedium,
    marginHorizontal: windowWidth(6),
    fontSize: fontSizes.FONT20,
  },
});
