import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default orderSummaryStyles = StyleSheet.create({
  mainView: {
    paddingHorizontal: windowWidth(10),
    marginTop:windowHeight(6)
  },
  title: {
    marginBottom: windowHeight(18),
    color:appColors.ecommerceFont,
    fontSize: fontSizes.FONT20,
    fontFamily:appFonts.MontserratSemiBold,
    marginTop:windowHeight(10),
    left:windowWidth(10)
  },
  row: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: '24%',
    height: windowHeight(67),
    borderRadius: windowHeight(5),
    resizeMode: 'contain',
  },
  container: {
    marginHorizontal: windowWidth(12),
  },
  textContainer: {
     paddingHorizontal: windowHeight(12),
     paddingVertical:windowHeight(4)
  },
  orderSeperator: {
    marginVertical: windowHeight(6),
  },
  name: {
    color: appColors.ecommerceFont,
    fontSize: fontSizes.FONT18HALF,
    fontFamily: appFonts.MontserratMedium,
  },
  price: {
    color: appColors.forgotFont,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.MontserratSemiBold,
    marginTop:windowHeight(8)
  },
  textStyle: {
    color: appColors.subTitle,
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.MontserratRegular,
    marginTop:windowHeight(2)
  },
});
