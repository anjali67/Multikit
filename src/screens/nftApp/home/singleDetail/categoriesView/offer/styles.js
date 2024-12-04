import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default offerStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: windowHeight(3),
    marginTop: windowHeight(2),
  },
  weth: {
    color: appColors.nftTitle,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT15,
  },
  price: {
    color: appColors.nftTitle,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT15,
    bottom: 8,
  },
  floor: {
    marginTop: windowHeight(8),
    marginHorizontal: windowWidth(16),
    color: appColors.nftTitle,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT16,
  },
  border: {
    borderBottomColor: appColors.border,
    borderBottomWidth: 1,
    marginTop: windowHeight(10),
  },
});
