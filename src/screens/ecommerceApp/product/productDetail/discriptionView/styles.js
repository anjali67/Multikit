import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default detailsViewStyles = StyleSheet.create({
  container: {
    marginTop: windowHeight(8),
    marginBottom: windowHeight(15),
  },
  txt: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.MontserratMedium,
    color: appColors.black,
    marginTop: windowHeight(9),
  },
  detail: {
    fontSize: fontSizes.FONT20,
  },
  title: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.MontserratRegular,
    color: appColors.subTitle,
    marginTop: windowHeight(7),
    lineHeight: windowHeight(18),
  },
  manufacturer: {
    paddingVertical: windowHeight(4),
    marginHorizontal: windowWidth(20),
  },
  optionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  product: {
    marginTop: windowHeight(12),
    marginHorizontal: windowWidth(20),
    paddingBottom: windowHeight(2),
    borderTopColor: appColors.verticalLine,
    borderTopWidth: 1,
  },
  minus: {
    fontSize: fontSizes.FONT20,
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratBold,
  },
});
