import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  image: {
    height: windowHeight(190),
    resizeMode: 'contain',
    width: windowWidth(590),
  },

  buttonStyle: {
    borderWidth: 1,
    marginTop: windowHeight(15),
    marginHorizontal: windowWidth(12),
    borderRadius: windowWidth(23),
    height: windowHeight(44),
    width: windowWidth(430),
  },
  btn: {
    fontFamily: appFonts.InterMedium,
    color: appColors.white,
    fontSize: fontSizes.FONT20HALF,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  containerView: {
    position: 'absolute',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: windowHeight(10),
  },
  container: {
    flex: 1,
  },
  title: {
    color: appColors.white,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT19HALF,
    opacity: 0.5,
  },
  content: {
    color: appColors.white,
    marginTop: windowHeight(8),
    textAlign: 'center',
    fontFamily: appFonts.InterSemiBold,
    fontSize: fontSizes.FONT26,
    width: windowWidth(400),
    lineHeight: windowHeight(25),
  },
  policy: {
    color: appColors.white,
    opacity: 0.4,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT17,
    marginHorizontal: windowHeight(12),
    lineHeight: windowHeight(18),
    marginTop: windowHeight(15),
  },
});
