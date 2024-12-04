import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  coupon: {
    marginTop: windowHeight(8),
  },
  mainView: {
    width: '100%',
    backgroundColor: appColors.white,
    paddingHorizontal: windowHeight(13),
    paddingVertical: windowHeight(10),
    borderRadius: windowHeight(8),
    marginVertical: windowHeight(7),
    elevation: 1,
  },
  subView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceTxt: {
    color: appColors.foodBtn,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT48,
  },
  percent: {
    fontSize: fontSizes.FONT20,
    color: appColors.foodSecondary,
    top: windowHeight(2),
  },
  off: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT16,
  },
  titleTxt: {
    fontFamily: appFonts.LatoRegular,
    fontSize: fontSizes.FONT17,
    color: appColors.black,
  },
  content: {
    fontFamily: appFonts.LatoRegular,
    fontSize: fontSizes.FONT17,
    color: appColors.foodContent,
  },
  useCode: {
    fontSize: fontSizes.FONT17,
    width: windowWidth(100),
    textAlign: 'center',
    fontFamily: appFonts.LatoRegular,
  },
  code: {
    fontSize: fontSizes.FONT16,
    color: appColors.white,
    backgroundColor: appColors.foodBtn,
    textAlign: 'center',
    borderRadius: windowHeight(20),
    paddingVertical: windowHeight(3),
    marginTop: windowHeight(4),
    width: windowWidth(100),
    fontFamily: appFonts.LatoMedium,
  },
  titleView: {
    marginLeft: windowWidth(8),
  },
  marginRight: {
    marginRight: windowWidth(8),
  },
  titleViewRight: {
    marginRight: windowWidth(8),
  },
  leftView: {
    marginHorizontal: windowWidth(7),
  },
});
