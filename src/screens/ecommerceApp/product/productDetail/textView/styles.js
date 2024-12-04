import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default sliderStyles = StyleSheet.create({
  mainView: {
    marginHorizontal: windowWidth(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: fontSizes.FONT22,
    width: '80%',
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratSemiBold,
  },
  price: {
    fontSize: fontSizes.FONT23,
    color: appColors.foodBtn,
    fontFamily: appFonts.MontserratSemiBold,
  },
  priceText: {
    fontSize: fontSizes.FONT16,
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
    textAlign: 'left',
    textDecorationLine: 'line-through',
    marginLeft: windowWidth(25),
  },
});
