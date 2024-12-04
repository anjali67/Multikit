import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  dataView: {
    marginTop: windowHeight(19),
  },
  addTxt: {
    marginHorizontal: windowWidth(20),
    fontFamily: appFonts.PublicSansSemiBold,
    color: appColors.groceryBtn,
    fontSize: fontSizes.FONT22,
  },
  name: {
    marginHorizontal: windowWidth(20),
    fontFamily: appFonts.PublicSansMedium,
    fontSize: fontSizes.FONT20,
    marginTop: windowHeight(7),
    color: appColors.black,
  },
  locationTxt: {
    marginHorizontal: windowWidth(20),
    fontFamily: appFonts.PublicSansRegular,
    color: appColors.groceryFont,
    fontSize: fontSizes.FONT21,
  },
});
