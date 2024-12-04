import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default orderDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    margin: windowWidth(18),
    marginTop:windowHeight(28)
  },
  title: {
    marginVertical: windowHeight(16),
    color: appColors.ecommerceFont,
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
  },
  subTitle: {
    color: appColors.ecommerceFont,
    fontSize: fontSizes.FONT20,
    fontFamily:appFonts.MontserratMedium,
  },
  emailReceipt: {
    top: windowHeight(4),
    color: appColors.subTitle,
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.MontserratRegular,
  },
  discription: {
    fontSize: fontSizes.FONT18HALF,
    fontFamily: appFonts.MontserratRegular,
    color: appColors.subTitle,
    marginVertical: windowHeight(3.5),
    lineHeight: windowHeight(18),
  
  },
});
