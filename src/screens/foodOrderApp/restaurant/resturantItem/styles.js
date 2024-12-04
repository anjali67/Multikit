import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default foodOrderStyles = StyleSheet.create({
  mainView: {
    marginVertical: windowHeight(10),
    marginLeft: windowWidth(20),
    backgroundColor: appColors.lightWhite,
    borderRadius: windowHeight(5),
    height: windowHeight(44),
  },
  mainContainer: {
    paddingVertical: windowHeight(12),
    paddingLeft: windowWidth(17),
  },
  textStyle: {
    fontSize: fontSizes.FONT20,
    color: appColors.foodItem,
    fontFamily: appFonts.LatoSemibold,
    marginRight: windowWidth(10),
  },
  text: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoSemibold,
    fontSize: fontSizes.FONT22,
    marginTop: windowHeight(7),
    marginHorizontal: windowWidth(10),
  },
  scrollView: {
    paddingHorizontal: windowWidth(12),
  },
  border: {
    borderBottomWidth: 2.8,
    paddingTop: windowHeight(9),
    borderColor: appColors.foodBtn,
    width: '110%',
    right: windowWidth(13),
  },
  margin: {
    marginVertical: windowHeight(2),
    marginHorizontal: windowWidth(20),
  },
  mainRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: appColors.white,
    justifyContent: 'space-between',
    marginTop: windowHeight(12),
    padding: windowHeight(10),
    borderRadius: windowHeight(12),
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    height: windowHeight(80),
    width: windowWidth(118),
    resizeMode: 'contain',
    borderRadius: windowHeight(10),
  },
  textContainer: {
    marginHorizontal: windowWidth(15),
    marginTop: windowHeight(6),
  },
  title: {
    fontSize: fontSizes.FONT20,
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoSemibold,
  },
  rating: {
    fontSize: fontSizes.FONT18HALF,
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoMedium,
    marginHorizontal: windowWidth(7),
    top: windowWidth(-2.5),
  },
  marginTop: {
    marginTop: windowHeight(4),
  },
  priceStyle: {
    marginTop: windowHeight(2),
  },
  decrement: {
    marginTop: windowHeight(8),
    left: windowWidth(4),
  },
  counterText: {
    color: appColors.white,
    fontSize: fontSizes.FONT20,
    left: windowWidth(10),
    marginHorizontal: windowWidth(6),
  },
  addContainer: {
    backgroundColor: appColors.foodBtn,
    paddingVertical: windowHeight(4),
    marginTop: windowHeight(45),
    paddingHorizontal: windowWidth(20),
    borderRadius: windowHeight(5),

    justifyContent: 'center',
  },
  add: {
    color: appColors.white,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT19,
    paddingLeft: windowWidth(8),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(800),
  },
});
