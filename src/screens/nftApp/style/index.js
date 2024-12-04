import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
export default nftStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: '91%',
    marginTop: windowHeight(13),
    borderRadius: windowHeight(5),
    height: windowHeight(44),
    width: windowWidth(420),
    marginTop: windowHeight(24),
  },
  btn: {
    color: appColors.white,
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.MontserratMedium,
    opacity: 0.8,
  },
  resendText: {
    textAlign: 'center',
    marginTop: windowHeight(2),
    color: '#A0A0A0',
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18HALF,
    textDecorationLine: 'underline',
  },
  time: {
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18,
    marginTop: 3,
    color: '#A0A0A0',
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  blankView: {
    height: windowHeight(8),
  },
  marginTop: {
    marginTop: windowHeight(20),
  },
  marginHorizontal: {
    marginHorizontal: windowWidth(30),
    marginTop: windowHeight(35),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: appColors.bgColor,
    alignItems: 'center',
    paddingVertical: windowHeight(12),
    paddingHorizontal: windowWidth(30),
    justifyContent: 'center',
    height: windowHeight(58),
    borderRadius: windowHeight(4),
  },
  textInput: {
    width: windowWidth(350),
    paddingVertical: windowHeight(0),
    marginTop: 4,
    bottom: windowHeight(3),
    paddingLeft: windowWidth(12),
    color: appColors.cabContent,
    fontFamily: appFonts.MontserratRegular,
  },
  text: {
    color: appColors.nftTitle,
    fontFamily: appFonts.MontserratRegular,
    marginHorizontal: windowWidth(12),
    fontSize: fontSizes.FONT19,
  },
  textView: {
    marginTop: windowHeight(4),
  },
});
