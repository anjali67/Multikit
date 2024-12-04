import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  createNow: {
    color: appColors.financeContent,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.InterRegular,
    marginTop: windowHeight(17),
    opacity: 0.9,
  },
  orText: {
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT20,
    color: appColors.financeContent,
    opacity: 0.9,
  },
  blank: {
    height: windowHeight(36),
  },
  textStyle: {
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT19,
    marginBottom: windowHeight(10),
  },
  container: {
    marginTop: windowHeight(30),
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight(20),
    marginBottom:windowHeight(7)
  },
  borderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderHalf: {
    borderWidth: 1,
    borderColor:appColors.financeBoreder,
    height: 1,
    width:windowWidth(140),
    marginHorizontal:windowWidth(12)
  }
});
