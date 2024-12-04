import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  imageContainer: {
    height: '65%',
    width: '100%',
  },
  topContainer: {
    flexDirection: 'row',
    marginTop: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  onBoardImg: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: windowHeight(10),
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(-20),
  },
  imageStyle: {
    height: '76%',
    width: '75%',
    resizeMode: 'contain',
    bottom: windowHeight(15),
  },
  logo: {
    height: windowHeight(38),
    width: windowWidth(45),
    resizeMode: 'contain',
  },
  blank: {
    height: windowHeight(40),
  },
  textStyle: {
    fontSize: fontSizes.FONT40,
    marginLeft: windowWidth(6),
    color: appColors.white,
    fontFamily: appFonts.NunitoSansSemiBold,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: fontSizes.FONT46,
    marginLeft: windowWidth(8),
    color: appColors.white,
    fontFamily: appFonts.OleoScriptSwashCapsBold,
    fontWeight: '600',
    textAlign: 'center',
  },
  text: {
    fontSize: fontSizes.FONT30,
    textAlign: 'center',
    marginHorizontal: windowWidth(31),
    lineHeight: windowHeight(25),
    fontFamily: appFonts.NunitoSansBold,
    color: appColors.foodSecondary,
    width: '85%',
  },
  subText: {
    fontSize: fontSizes.FONT22,
    textAlign: 'center',
    fontFamily: appFonts.NunitoSansRegular,
    color: appColors.foodContent,
    marginHorizontal: windowWidth(50),
    marginTop: windowHeight(8),
  },
  btnStyle: {
    width: '80%',
    backgroundColor: appColors.foodBtn,
    marginTop: windowHeight(25),
    borderRadius: windowHeight(20),
    height: windowHeight(42),
  },
  btn: {
    color: appColors.white,
    fontSize: fontSizes.FONT23,
    fontFamily: appFonts.NunitoSansBold,
  },
  skip: {
    fontSize: fontSizes.FONT22,
    textAlign: 'center',
    fontFamily: appFonts.NunitoSansBold,
    color: appColors.foodSecondary,
    marginHorizontal: windowWidth(40),
    marginTop: windowHeight(10),
  },
});
