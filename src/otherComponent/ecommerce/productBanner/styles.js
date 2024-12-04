import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(20),
    marginVertical: windowWidth(10),
  },
  imageStyle: {
    height: windowWidth(100),
    width: '100%',
    resizeMode: 'stretch',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: windowWidth(20),
  },
  shopView: {
    backgroundColor: appColors.white,

    marginTop: windowWidth(7),
    paddingHorizontal: windowWidth(9),
    borderRadius: windowWidth(5),
    alignSelf: 'center',
    padding: windowWidth(5),
  },
  shopText: {
    fontSize: fontSizes.FONT16HALF,
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratSemiBold,
  },
  offer: {
    width: '30%',
    fontSize: fontSizes.FONT18,
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratSemiBold,
    marginVertical: windowWidth(6),
  },
});
