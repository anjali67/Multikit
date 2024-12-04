import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
export default homeStyles = StyleSheet.create({
  container: {
    height: windowHeight(98),
    width: '100%',
    backgroundColor: appColors.white,
    elevation: 5,
    borderTopColor: appColors.lightGray,
  },
  row: {
    flexDirection: 'row',
    marginTop: windowHeight(13),
    marginHorizontal: windowWidth(25),
    marginBottom: windowHeight(2),
  },
  priceText: {
    color: appColors.cabContent,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT20,
  },
  price: {
    fontFamily: appFonts.MontserratSemiBold,
    color: appColors.nftTitle,
  },
  btnText: {
    color: appColors.nftTitle,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
  },
  btn1Text: {
    fontFamily: appFonts.MontserratRegular,
    paddingHorizontal: windowHeight(5),
    fontSize: fontSizes.FONT20,
  },
  containerStyle: {
    marginTop: 12,
    justifyContent: '',
    marginHorizontal: 8,
  },
  btnViewStyle: {
    bordercolor: appColors.nftTitle,
    borderWidth: 1,
  },
});
