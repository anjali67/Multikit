import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  addTxt: {
    marginHorizontal: windowWidth(20),
    fontFamily: appFonts.PublicSansSemiBold,
    color: appColors.groceryBtn,
    fontSize: fontSizes.FONT22,
  },
  paymentView: {
    marginTop: windowHeight(23),
    marginBottom: windowHeight(20),
  },
  number: {
    flexDirection: 'row',
    marginLeft: windowWidth(20),
    alignItems: 'center',
  },
  masterCardImg: {
    height: windowHeight(54),
    width: windowWidth(60),
    resizeMode: 'contain',
  },
  cardNumber: {
    marginLeft: windowWidth(10),
    fontFamily: appFonts.PublicSansMedium,
    fontSize: fontSizes.FONT20,
    color: appColors.black,
  },
});
