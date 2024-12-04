import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default Styles = StyleSheet.create({
  row: {
    marginTop: windowHeight(14),
  },
  textStyle: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
  },
  mainViewStyle: {
    elevation: 1,
    paddingHorizontal: windowWidth(20),
    width: windowWidth(478),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: windowHeight(6),
    backgroundColor: appColors.white,
    marginHorizontal: windowWidth(0),
    borderBottomRightRadius: windowHeight(15),
    borderBottomLeftRadius: windowHeight(15),
    borderTopLeftRadius: windowHeight(0),
    borderTopRightRadius: windowHeight(0),
  },
  text: {
    marginLeft: windowWidth(10),
    fontFamily: appFonts.MontserratMedium,
    color: appColors.reviewText,
  },
  vertical: {
    height: '55%',
    width: 1.1,
    backgroundColor: appColors.gray,
    marginTop: windowHeight(7),
    marginRight: windowWidth(30),
  },
  img: {
    height: windowHeight(120),
    width: windowWidth(210),
    borderRadius: windowHeight(5),
    resizeMode: 'contain',
  },
  container: {
    marginHorizontal: windowWidth(10),
    marginTop: windowWidth(1),
  },
  rateView: {
    position: 'absolute',
    bottom: windowWidth(13),
    width: windowWidth(220),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rate: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT17HALF,
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: appColors.white,
    marginHorizontal: windowWidth(20),
    paddingHorizontal: windowWidth(10),
    borderRadius: windowHeight(3),
    paddingVertical: windowHeight(3),
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: windowWidth(12),
  },
  star: {
    marginHorizontal: windowWidth(5),
  },
  title: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT19,
    marginVertical: windowHeight(4),
    marginTop: windowHeight(10),
  },
  margin: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(25),
    color: appColors.label,
    fontFamily: appFonts.MontserratMedium,
  },
  rowView: {
    flexDirection: 'row',
  },
  address: {
    color: appColors.label,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT16,
    marginHorizontal: windowWidth(5),
    marginTop: windowHeight(1),
  },
  price: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratMedium,
    marginTop: windowHeight(5),
    fontSize: fontSizes.FONT19,
    marginHorizontal: windowWidth(3),
  },
  main: {
    marginHorizontal: windowWidth(10),
    marginVertical: windowHeight(10),
    width: windowWidth(210),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(20),
  },
  rowStyle: {
    marginHorizontal: windowWidth(10),
  },
});
