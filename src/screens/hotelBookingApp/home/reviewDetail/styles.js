import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '../../../../theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  rowStyle: {
    height: windowHeight(90),
    backgroundColor: appColors.white,
  },
  imageStyle: {
    height: windowHeight(90),
    borderRadius: windowWidth(10),
  },
  headingTitle: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(20),
  },
  mainView: {
    marginTop: windowHeight(1),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(20),
  },
  content: {
    color: appColors.label,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT19,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  top: {
    marginTop: windowHeight(6),
  },
  price: {
    color: appColors.reviewText,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.MontserratRegular,
  },
  img: {
    width: '96%',
    resizeMode: 'contain',
    marginTop: windowHeight(6),
    marginBottom: windowHeight(10),
  },
  contentStyle: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT19,
  },
  mainStyle: {
    marginVertical: windowHeight(6),
  },
  priceStyle: {
    color: '#BC0101',
    fontFamily: appFonts.MontserratMedium,
  },
  text: {
    fontFamily: appFonts.MontserratMedium,
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(100),
  },
  nameStyle: {
    fontFamily: appFonts.MontserratSemiBold,
  },
  container: {
    marginVertical: windowHeight(12),
    marginHorizontal: windowWidth(18),
  },
  linearGradient: {
    top: windowHeight(8),
    height: windowWidth(345),
    marginBottom: windowHeight(9),
    marginVertical: windowHeight(6),
  },
  innerContainer: {
    borderRadius: windowHeight(12), // <-- Inner Border Radius
    flex: 1,
    margin: 1.5,
    paddingHorizontal: windowWidth(14),
    backgroundColor: appColors.white,
  },
  backgroundView: {
    height: windowHeight(40),
    top: windowHeight(-6),
    width: '107.5%',
    right: windowWidth(14),
    justifyContent: 'center',
    paddingHorizontal: windowWidth(30),
    borderTopRightRadius: windowHeight(12),
    borderTopLeftRadius: windowHeight(12),
  },
  textStyle: {
    color: appColors.white,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
  },
  circle: {
    height: windowHeight(5),
    width: windowWidth(7),
    backgroundColor: appColors.label,
    borderRadius: windowHeight(20),
    margin: windowHeight(4),
    marginTop: windowHeight(7),
  },
  title: {
    color: appColors.label,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18HALF,
    marginBottom: windowHeight(10),
    marginHorizontal: windowWidth(8),
  },
  btnView: {
    paddingVertical: windowHeight(10),
    width: windowWidth(230),
  },
});
