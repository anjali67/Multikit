import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(6),
  },
  mainView: {
    marginTop: windowHeight(12),
    backgroundColor: appColors.white,
    width: windowWidth(434),
    padding: windowHeight(12),
    borderRadius: windowHeight(10),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: windowHeight(66),
    width: windowWidth(100),
    resizeMode: 'contain',
    borderRadius: windowHeight(7),
  },
  clock: {
    height: windowHeight(18),
    width: windowWidth(18),
    resizeMode: 'contain',
    marginTop: windowHeight(1),
  },
  row: {
    flexDirection: 'row',
  },
  textContainer: {
    marginHorizontal: windowWidth(12),
  },
  title: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoSemibold,
    fontSize: fontSizes.FONT21,
  },
  content: {
    color: appColors.foodContent,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT19,
    marginTop: windowHeight(2.3),
  },
  marginTop: {
    marginTop: windowHeight(7),
  },
  leftView: {
    marginRight: windowWidth(4),
  },
  rightView: {
    marginLeft: windowWidth(4),
  },
  time: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT18,
    marginHorizontal: windowWidth(6),
  },
  dotStyle: {
    height: windowHeight(5),
    width: windowWidth(7),
    borderRadius: windowHeight(25),
    backgroundColor: appColors.foodContent,
    margin: windowHeight(5),
    marginTop: windowHeight(7.5),
  },
  ratingView: {
    backgroundColor: appColors.foodPrimary,
    height: windowHeight(19),
    paddingHorizontal: windowWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
  },
  rating: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoSemibold,
    fontSize: fontSizes.FONT18,
    left: windowWidth(3),
  },
  fontsize: {
    fontSize: fontSizes.FONT18,
    marginTop: windowHeight(0.3),
  },
});
