import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(12),
    marginBottom: windowHeight(20),
  },
  mainContainer: {
    backgroundColor: appColors.reviewsBg,
    paddingVertical: windowHeight(6),
    borderRadius: windowHeight(6),
    marginBottom: windowHeight(18),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowHeight(6),
  },
  textContainer: {
    width: '81%',
    paddingVertical: windowHeight(4),
    paddingHorizontal: windowWidth(20),
  },
  text: {
    fontFamily: appFonts.MontserratMedium,
    color: appColors.reviewText,
    fontSize: fontSizes.FONT19,
  },
  ratingContainer: {
    height: windowHeight(31),
    width: windowWidth(45),
    borderRadius: windowHeight(10),
    backgroundColor: appColors.forgotFont,
    borderRadius: windowHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: windowWidth(20),
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
    marginVertical: windowHeight(3),
  },
  content: {
    color: '#A3A3A3',
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18HALF,
    marginVertical: windowHeight(5),
    width: '130%',
  },
  seeAllReviews: {
    alignItems: 'flex-end',
    bottom: windowHeight(8),
  },
  textStyle: {
    fontFamily: appFonts.MontserratMedium,
    color: appColors.ecommerceFont,
    fontSize: fontSizes.FONT17HALF,
  },
});
