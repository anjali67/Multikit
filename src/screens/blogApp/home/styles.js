import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  image: {
    height: windowHeight(160),
    width: windowWidth(430),
    resizeMode: 'contain',
    borderRadius: windowHeight(10),
    marginBottom: windowHeight(10),
  },
  mainContainer: {
    marginTop: windowHeight(15),
  },
  title: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
    lineHeight: windowHeight(20),
  },
  row: {
    flexDirection: 'row',
    marginTop: windowHeight(8),
    alignItems: 'center',
  },
  date: {
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
  },
  circle: {
    height: windowHeight(4.5),
    width: windowHeight(4.5),
    backgroundColor: appColors.subTitle,
    borderRadius: windowHeight(20),
    marginVertical: windowHeight(6),
    marginHorizontal: windowWidth(18),
  },
  mainView: {
    marginHorizontal: windowWidth(25),
  },
  marginTop: {
    marginTop: windowHeight(20),
  },
  name: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18,
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(7),
    bottom: windowHeight(5),
    width: windowWidth(290),
  },
  imageStyle: {
    height: windowHeight(62),
    width: windowWidth(90),
    resizeMode: 'cover',
    borderRadius: windowHeight(4),
    left: windowWidth(10),
  },
  containerStyle: {
    width: windowWidth(280),
    marginHorizontal: windowWidth(0),
    right: windowWidth(6),
    marginTop: windowHeight(7),
  },
  rowContainer: {
    backgroundColor: appColors.white,
    elevation: 1,
    paddingVertical: windowHeight(8),
    alignItems: 'center',
    borderRadius: windowHeight(5),
    width: '98%',
    marginBottom: 6,
    alignSelf: 'center',
  },
  textContainer: {
    marginHorizontal: windowWidth(6),
  },
  category: {
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18,
    color: appColors.subTitle,
  },
  content: {
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT18,
    color: appColors.fontColor,
    width: windowWidth(300),
    marginTop: windowHeight(6),
    marginBottom: windowHeight(8),
  },
  blogRow: {
    flexDirection: 'row',
    marginTop: 1,
  },
  filterView: {
    marginRight: windowWidth(12),
    marginVertical: windowHeight(10),
    backgroundColor: appColors.grayLight,
    paddingHorizontal: windowHeight(22),
    borderRadius: windowHeight(15),
    paddingVertical: windowHeight(8),
    marginLeft: windowWidth(3),
  },
  imageView: {
    height: windowHeight(75),
    width: windowWidth(108),
    resizeMode: 'cover',
    borderRadius: windowHeight(4),
  },
  marginRight: {
    marginLeft: windowWidth(6),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(40),
  },
  textInput: {
    fontFamily: appFonts.MontserratRegular,
    flex: 1,
    paddingLeft: windowWidth(14),
    fontSize: fontSizes.FONT19,
  },
  inputContainer: {
    backgroundColor: appColors.grayLight,
    borderRadius: windowHeight(4),
    marginTop: windowHeight(18),
  },
  contentStyle: {
    marginBottom: windowHeight(4),
  },
  result: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
  },
  titleStyle: {
    fontSize: fontSizes.FONT16HALF,
    marginTop: windowHeight(1),
  },
  categoryView: {
    overflow: 'hidden',
  },
  adView: {
    flexDirection: 'row',
    transform: [{rotate: '40deg'}],
    right: -20,
    width: '25%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: -7,
    backgroundColor: appColors.activeTopic,
    height: 25,
  },
  adText: {
    color: appColors.white,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT14,
    top: 4,
  },
});
