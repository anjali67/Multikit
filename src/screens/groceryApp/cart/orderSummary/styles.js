import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  blank: {
    height: windowHeight(24),
  },
  btnStyle: {
    width: '90%',
    backgroundColor: appColors.groceryBtn,
    marginHorizontal: windowWidth(20),
    marginBottom: windowHeight(10),
  },
  btn: {
    color: appColors.white,
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.PublicSansMedium,
  },
});
