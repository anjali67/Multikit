import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  title: {
    color: appColors.white,
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.MontserratMedium,
    marginBottom: windowHeight(4),
  },
  name: {
    color: appColors.reviewText,
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.MontserratMedium,
  },
  main: {
    paddingHorizontal: windowHeight(15),
    paddingTop: windowHeight(1),
    marginTop: windowHeight(10),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  margin: {
    marginHorizontal: windowWidth(20),
  },
  circle: {
    height: windowHeight(4),
    width: windowWidth(6),
    backgroundColor: appColors.white,
    borderRadius: windowHeight(30),
    marginTop: windowHeight(6.8),
    marginLeft: windowWidth(5),
    marginRight: windowWidth(10),
  },
  textStyle: {
    color: appColors.white,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.MontserratRegular,
    opacity: 0.8,
  },
  fontSize: {
    fontSize: fontSizes.FONT20,
  },
  top: {
    marginTop: windowHeight(10),
  },
  imgeStyle: {
    height: windowHeight(135),
    width: windowHeight(300),
    borderRadius: windowHeight(4),
    resizeMode: 'contain',
  },
  mainView: {
    marginTop: windowHeight(13),
    marginHorizontal: windowWidth(20),
  },
  textView: {
    position: 'absolute',
    width: '96%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: windowHeight(160),
    bottom: windowHeight(13),
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: windowWidth(6),
    borderRadius: windowHeight(4),
    paddingHorizontal: windowWidth(18),
  },
  text: {
    color: appColors.white,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT17HALF,
  },
  roomText: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT21,
    marginHorizontal: windowHeight(15),
    marginTop: windowHeight(10),
    marginBottom: windowHeight(5),
  },
  linearGradient: {
    top: windowHeight(8),
    marginRight: windowWidth(12),
    height: windowWidth(44),
    borderRadius: windowHeight(5), // <-- Outer Border Radius
    marginBottom: windowHeight(9),
  },
  innerContainer: {
    borderRadius: windowHeight(5), // <-- Inner Border Radius
    flex: 1,
    margin: 1.5,
    justifyContent: 'center',
    paddingHorizontal: windowWidth(14),
    backgroundColor: appColors.white,
  },

  curruncyText: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
    color: appColors.reviewText,
    textAlign: 'center',
    paddingTop: windowHeight(6),
  },
  btnView: {
    width: windowWidth(150),
    paddingVertical: windowHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(6),
    bottom: windowHeight(11),
  },
  btnText: {
    fontSize: fontSizes.FONT19,
    color: appColors.white,
    fontFamily: appFonts.MontserratRegular,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowHeight(14),
    marginTop: windowHeight(19),
  },
  editIcon: {
    marginTop: windowHeight(3),
    marginHorizontal: windowWidth(8),
  },
});
