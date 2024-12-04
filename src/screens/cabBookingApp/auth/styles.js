import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.verticalLine,
    height: windowHeight(45),
    width: '91%',
    marginHorizontal: windowWidth(20),
    borderRadius: windowHeight(12),
    flexDirection: 'row',
    marginBottom: windowHeight(15),
  },
  image: {
    height: windowHeight(80),
    width: windowWidth(150),
    resizeMode: 'contain',
    marginTop: windowHeight(0),
  },

  labelView: {
    paddingHorizontal: windowHeight(51),
    borderRadius: windowHeight(12),
    height: windowHeight(36),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeLabel: {
    color: appColors.white,
    fontFamily: appFonts.RobotoMedium,
    fontSize: fontSizes.FONT20,
  },
  inActiveLabel: {
    color: appColors.cabText,
    fontFamily: appFonts.RobotoMedium,
    fontSize: fontSizes.FONT21,
  },
  forgotView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

    marginHorizontal: windowWidth(22),
  },
  forgotText: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.RobotoRegular,
    color: appColors.foodContent,
    opacity: 1,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: appFonts.RobotoMedium,
    color: appColors.foodContent,
    backgroundColor: 'red',
    paddingHorizontal: windowWidth(25),
    fontSize: fontSizes.FONT18,
  },
  signInContainer: {
    marginHorizontal: windowWidth(20),
    marginBottom: windowHeight(3),
  },
  titleStyle: {
    fontFamily: appFonts.RobotoRegular,
    color: appColors.cabText,
    fontSize: fontSizes.FONT21HALF,
  },
  mainViewStyle: {
    marginHorizontal: windowWidth(8),
    borderRadius: windowHeight(12),
  },
  text: {
    fontFamily: appFonts.RobotoRegular,
    color: appColors.foodContent,
    fontSize: fontSizes.FONT18HALF,
    textAlign: 'center',
    marginVertical: windowHeight(8),
  },
  padding: {
    paddingHorizontal: windowWidth(20),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(20),
  },
  mainContainer: {
    margin: windowWidth(20),
    marginVertical: windowHeight(30),
  },
  name: {
    fontFamily: appFonts.RobotoMedium,
    color: appColors.cabText,
    fontSize: fontSizes.FONT22,
  },
  content: {
    fontFamily: appFonts.RobotoRegular,
    color: appColors.foodContent,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(10),
    lineHeight: windowHeight(20),
  },
  blanView: {
    height: windowHeight(15),
  },
  mainContainer: {
    marginHorizontal: windowWidth(10),
  },
  textContainer: {
    marginHorizontal: windowWidth(10),
    marginTop: windowHeight(35),
    marginBottom: windowHeight(10),
  },
  textInput: {
    backgroundColor: appColors.reviewsBg,
    marginHorizontal: windowWidth(10),
    borderWidth: 0,
    paddingVertical: windowHeight(5),
  },
  buttonStyle: {
    borderColor: appColors.cabText,
    borderWidth: 1,
    marginTop: windowHeight(15),
    marginHorizontal: windowWidth(12),
    borderRadius: windowWidth(23),
    height: windowHeight(44),
  },
  btn: {
    fontFamily: appFonts.RobotoMedium,
    color: appColors.cabText,
  },
  resendText: {
    textAlign: 'center',
    marginTop: windowHeight(10),
    color: appColors.foodContent,
    fontFamily: appFonts.RobotoRegular,
    fontSize: fontSizes.FONT18,
  },
  time: {
    color: appColors.cabText,
    fontFamily: appFonts.RobotoMedium,
  },
  imageStyle: {
    height: windowHeight(280),
    width: windowWidth(400),
    resizeMode: 'contain',
    marginTop: windowHeight(60),
  },
  gpsText: {
    color: appColors.cabText,
    fontFamily: appFonts.RobotoMedium,
    fontSize: fontSizes.FONT25,
    marginTop: windowHeight(20),
  },
});
