import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainView: {
    marginHorizontal: windowWidth(20),
    borderRadius: windowWidth(10),
  },
  title: {
    fontSize: fontSizes.FONT24,
    marginBottom: windowHeight(8),
    fontFamily: appFonts.PublicSansSemiBold,
    color: appColors.black,
    marginTop: windowWidth(2),
  },
  data: {
    fontSize: fontSizes.FONT19,
    color: appColors.groceryFont,
    fontFamily: appFonts.PublicSansRegular,
  },
  dataView: {
    marginTop: windowHeight(6),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  deliveryView: {
    borderBottomWidth: 1.8,
    paddingBottom: windowHeight(10),
    borderColor: appColors.line,
  },
  amountView: {
    marginTop: windowHeight(12),
    justifyContent: 'space-between',
    marginBottom: windowHeight(10),
    flexDirection: 'row',
  },
  amount: {
    fontSize: fontSizes.FONT19,
    color: appColors.black,
    fontFamily: appFonts.PublicSansBold,
  },
  price: {
    fontSize: fontSizes.FONT19,
    color: appColors.black,
    fontFamily: appFonts.PublicSansSemiBold,
  },
});
