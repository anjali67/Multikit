import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: appColors.ecommorcePrimary,
    padding: windowHeight(7),
    paddingHorizontal: windowWidth(40),
    paddingVertical: windowHeight(10),
  },
  cartText: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT19,
    color: appColors.subTitle,
  },
  text: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT16HALF,
    marginTop: windowHeight(2),
    color: appColors.subTitle,
    borderBottomColor: appColors.subTitle,
    borderBottomWidth: 1,
  },
  heading: {
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT20,
    color: appColors.subTitle,
    marginHorizontal: windowWidth(10),
  },
  textView: {
    marginTop: windowHeight(12),
    right: windowWidth(8),
    bottom: windowHeight(4),
    flexDirection: 'row',
  },
  vertical: {
    height: '65%',
    width: 1,
    backgroundColor: appColors.ecommerceFont,
    marginTop: windowHeight(7),
    marginRight: windowWidth(20),
  },
});
