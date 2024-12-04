import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    margin: windowWidth(20),
    borderRadius: windowWidth(10),
    marginTop: windowHeight(26),
  },
  title: {
    fontSize: fontSizes.FONT20,
    marginBottom: windowHeight(4),
    fontFamily: appFonts.MontserratMedium,
    color: appColors.black,
    marginTop: windowWidth(2),
  },
  data: {
    fontSize: fontSizes.FONT19,
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
  },
  dataView: {
    marginTop: windowHeight(6),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  amountView: {
    marginTop: windowHeight(8),
    justifyContent: 'space-between',
    marginBottom: windowHeight(10),
    flexDirection: 'row',
  },
  price: {
    fontSize: fontSizes.FONT19,
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratMedium,
  },
  mainContainer: {
    marginHorizontal: windowWidth(20),
    marginBottom: windowHeight(30),
  },
  blank: {
    height: windowHeight(20),
  },
  addressText: {
    fontSize: fontSizes.FONT18HALF,
    lineHeight: windowHeight(20),
    width: '90%',
  },
});
