import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(12),
    marginTop: windowHeight(3),
  },
  gradiantView: {
    paddingHorizontal: windowHeight(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(6),
    height: windowHeight(32),
    right: windowWidth(20),
  },
  mainContainer: {
    backgroundColor: appColors.reviewsBg,
    borderRadius: windowHeight(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: windowWidth(30),
    paddingVertical: windowHeight(12),
    paddingHorizontal: windowWidth(20),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    paddingLeft: windowWidth(20),
  },
  text: {
    fontFamily: appFonts.MontserratMedium,
    color: appColors.reviewText,
    fontSize: fontSizes.FONT19,
  },
  ratingText: {
    fontFamily: appFonts.MontserratSemiBold,
    color: appColors.white,
    fontSize: fontSizes.FONT19,
  },
  date: {
    color: '#A3A3A3',
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT18,
    marginVertical: windowHeight(4),
  },
  content: {
    color: '#A3A3A3',
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18HALF,
    width: windowWidth(390),
    marginTop: windowHeight(8),
  },
  textStyle: {
    fontFamily: appFonts.MontserratMedium,
    color: appColors.ecommerceFont,
    fontSize: fontSizes.FONT17HALF,
  },
});
