import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '../../../theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginVertical: windowHeight(25),
    marginHorizontal: windowWidth(20),
  },
  mainView: {
    backgroundColor: appColors.reviewsBg,
    borderRadius: windowHeight(8),
    padding: windowHeight(13),
    marginBottom: windowHeight(18),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  border: {
    borderBottomColor: appColors.borderColor,
    borderBottomWidth: 1.5,
    marginTop: windowHeight(10),
    width: '102%',
    right: windowWidth(3),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    height: windowHeight(78),
    width: windowWidth(115),
    borderRadius: windowHeight(10),
    resizeMode: 'cover',
  },
  top: {
    marginTop: windowHeight(6),
  },
  dateText: {
    color: appColors.label,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.MontserratRegular,
    marginTop: windowHeight(2),
  },
  bookedView: {
    paddingHorizontal: windowHeight(13),
    paddingVertical: windowHeight(4),
    borderRadius: windowHeight(12),
  },
  bookedText: {
    color: appColors.onBoardGradiant,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT16,
  },
  textContainer: {
    marginVertical: windowWidth(12),
    marginHorizontal: windowWidth(17),
  },
  name: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
  },
  content: {
    color: appColors.label,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18,
    marginTop: windowHeight(6),
  },
  starRatingView: {
    flexDirection: 'row',
    marginTop: windowHeight(6),
    right: windowWidth(6),
    alignItems: 'center',
  },
  rating: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT18,
    marginHorizontal: windowWidth(12),
  },
  total: {
    color: appColors.label,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT19,
  },
  price: {
    color: appColors.onBoardGradiant,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT19,
  },
  viewDetails: {
    color: appColors.white,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18,
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(100),
  },
});
