import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  scrollView: {
    marginTop: windowHeight(9),
  },
  mainView: {
    backgroundColor: appColors.white,
    marginHorizontal: windowWidth(7),
    borderRadius: windowHeight(12),
    marginTop: windowHeight(4),
  },
  image: {
    height: windowHeight(120),
    width: windowWidth(245),
  },
  boxContainer: {
    backgroundColor: appColors.white,
    paddingHorizontal: windowWidth(12),
    borderRadius: windowHeight(5),
    paddingVertical: windowHeight(1.7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingView: {
    backgroundColor: appColors.white,
    paddingHorizontal: windowWidth(14),
    borderRadius: windowHeight(5),
    paddingVertical: windowHeight(1.2),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(4),
  },
  star: {
    height: windowHeight(16),
    width: windowWidth(16),
    resizeMode: 'contain',
    right: windowWidth(5),
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: windowHeight(4),
  },
  mainContainer: {
    width: '90%',
    alignItems: 'flex-end',
    margin: windowHeight(6),
  },
  title: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT20,
  },
  textContainer: {
    margin: windowHeight(10),
  },
  content: {
    color: appColors.foodContent,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT19,
    marginTop: windowHeight(1.8),
  },
  row: {
    flexDirection: 'row',
  },
  marginTop: {
    marginTop: windowHeight(6),
  },
  leftView: {
    marginRight: windowWidth(4),
  },
  rightView: {
    marginLeft: windowWidth(8),
  },
  time: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT19,
    marginHorizontal: windowWidth(6),
  },
  dotStyle: {
    height: windowHeight(5),
    width: windowWidth(7),
    borderRadius: windowHeight(25),
    backgroundColor: appColors.foodContent,
    margin: windowHeight(5),
    marginTop: windowHeight(7),
  },
  clock: {
    height: windowHeight(16),
    width: windowWidth(16),
    resizeMode: 'contain',
    marginVertical: windowHeight(1.5),
  },
  offer: {
    color: appColors.foodBtn,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT19,
    margin: windowHeight(4),
    marginHorizontal: windowHeight(4),
  },
  rating: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoSemibold,
    fontSize: fontSizes.FONT18,
  },
  bestSeller: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoSemibold,
    fontSize: fontSizes.FONT18,
  },
  fontsize: {
    fontSize: fontSizes.FONT18,
    marginHorizontal: windowWidth(8),
  },
  offerImg: {
    height: windowHeight(24),
    width: windowWidth(24),
    resizeMode: 'contain',
    margin: windowHeight(1),
  },
});
