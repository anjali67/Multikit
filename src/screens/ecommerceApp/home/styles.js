import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  rowStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(22),
  },
  textStyle: {
    color: appColors.ecommorcePrimary,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT20,
    marginTop: windowHeight(10),
  },
  seeAllStyle: {
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(10),
  },
  scrollView:{
    paddingBottom:windowHeight(100)
  }
});
