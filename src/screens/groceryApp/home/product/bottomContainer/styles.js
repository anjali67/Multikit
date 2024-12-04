import {StyleSheet} from 'react-native';
import {windowWidth, fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    margin: windowHeight(7),
    left: windowWidth(4),
  },
  cartText: {
    marginHorizontal: windowWidth(12),
    fontFamily: appFonts.PublicSansRegular,
    fontSize: fontSizes.FONT20,
    color: appColors.white,
  },
  text: {
    fontFamily: appFonts.PublicSansRegular,
    fontSize: fontSizes.FONT16,
    marginVertical: windowHeight(1),
    color: appColors.grayLight,
  },
  price: {
    fontFamily: appFonts.PublicSansSemiBold,
    fontSize: fontSizes.FONT17,
    marginVertical: windowHeight(1),
    color: appColors.grayLight,
  },
  icon: {
    fontSize: fontSizes.FONT26,
    color: appColors.black,
    fontFamily: appFonts.PublicSansRegular,
  },
  count: {
    fontSize: fontSizes.FONT20,
    color: appColors.groceryBtn,
    fontFamily: appFonts.PublicSansRegular,
  },
  rowView: {
    backgroundColor: appColors.white,
    borderRadius: windowHeight(4),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: windowWidth(130),
    paddingHorizontal: windowWidth(12),
    paddingVertical: windowHeight(2),
  },
});
