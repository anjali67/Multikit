import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  txt: {
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.PublicSansBold,
    color: appColors.black,
    marginTop: windowHeight(12),
    marginHorizontal: windowWidth(12),
    right: windowWidth(4),
  },
  ratingView: {
    marginTop: windowHeight(10),
    flexDirection: 'row',
    left: windowWidth(2),
  },
  rating: {
    fontSize: fontSizes.FONT15,
    fontFamily: appFonts.PublicSansMedium,
    marginLeft: windowWidth(10),
    color: appColors.groceryFont,
    marginTop: windowHeight(5),
  },
  view: {
    marginTop: windowHeight(8),
    flexDirection: 'row',
    marginHorizontal: windowWidth(4),
  },
  originalPrice: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.PublicSansMedium,
    marginHorizontal: windowWidth(10),
    textDecorationLine: 'line-through',
    color: appColors.groceryFont,
    marginTop: windowHeight(2),
  },
  price: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.PublicSansSemiBold,
    color: appColors.groceryBtn,
  },
});
