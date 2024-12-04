import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  imageStyle: {
    height: windowHeight(180),
    width: windowWidth(500),
  },
  innerContainer: {
    height: windowHeight(170),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth(470),
    alignItems: 'center',
    paddingHorizontal: windowWidth(10),
  },
  image: {
    height: windowHeight(40),
    width: windowHeight(44),
    resizeMode: 'contain',
    borderRadius: windowHeight(30),
  },
  follower: {
    backgroundColor: appColors.activeTopic,
    paddingVertical: windowHeight(5),
    paddingHorizontal: windowWidth(32),
    borderRadius: windowHeight(12),
    marginHorizontal: windowWidth(10),
  },
  followText: {
    color: appColors.blackColor,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT17HALF,
    lineHeight: windowHeight(15),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: appColors.white,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18HALF,
  },
  textView: {
    marginHorizontal: windowWidth(15),
  },
  circleView: {
    height: windowHeight(28),
    width: windowHeight(28),
    backgroundColor: appColors.white,
    justifyContent: 'center',
    borderRadius: windowHeight(20),
    marginTop: windowHeight(15),
    alignItems: 'center',
  },
  marginTop: {
    marginTop: windowHeight(15),
  },
  quotesView: {
    height: windowHeight(27),
    width: windowWidth(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.activeTopic,
    borderRadius: windowHeight(4),
    marginRight: windowWidth(16),
    bottom: windowHeight(4),
  },
  blankView: {
    height: windowHeight(8),
  },
  parahraph: {
    color: appColors.blogContent,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18HALF,
    lineHeight: windowHeight(19),
  },
  textStyle: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT20,
    marginBottom: windowHeight(20),
  },
  circle: {
    height: windowHeight(4),
    width: windowHeight(4),
    backgroundColor: appColors.subTitle,
    borderRadius: windowHeight(20),
    marginVertical: windowHeight(6),
    marginHorizontal: windowWidth(12),
  },
  commentView: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  dateTime: {
    flexDirection: 'row',
    marginVertical: windowHeight(8),
  },
  inputView: {
    backgroundColor: appColors.grayLight,
    flexDirection: 'row',
    flex: 1,
    paddingLeft: windowWidth(20),
    marginHorizontal: windowWidth(3),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: windowHeight(4),
  },
});
