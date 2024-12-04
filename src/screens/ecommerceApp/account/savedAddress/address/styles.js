import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: windowHeight(20),
    marginTop: windowHeight(14),
  },
  container: {
    height: windowHeight(147),
    width: '100%',
    backgroundColor: appColors.bgColor,
    borderRadius: windowHeight(4),
    padding: windowHeight(15),
    borderColor: appColors.forgotFont,
    marginBottom: windowHeight(18),
  },
  row: {
    flexDirection: 'row',
  },
  bgColor: {
    height: windowHeight(27),
    width: windowWidth(38),
    backgroundColor: appColors.foodBtn,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(5),
  },
  textContainer: {
    marginHorizontal: windowWidth(13),
    marginVertical: windowHeight(4),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textView: {
    marginTop: windowHeight(9),
  },
  top: {
    marginTop: windowHeight(7),
  },
  name: {
    fontSize: fontSizes.FONT19,
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratMedium,
  },
  title: {
    fontSize: fontSizes.FONT18HALF,
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratRegular,
  },
  address: {
    fontSize: fontSizes.FONT18HALF,
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
    marginTop: windowHeight(4),
    width: '90%',
    lineHeight: windowHeight(18),
  },
  phoneText: {
    fontSize: fontSizes.FONT18,
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
    marginTop: windowHeight(0),
  },
});
