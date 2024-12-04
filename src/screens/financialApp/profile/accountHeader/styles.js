import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import {windowWidth} from '@theme/appConstant';

export default Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: windowHeight(25),
    paddingHorizontal: windowWidth(17),
  },
  image: {
    height: windowHeight(128),
    width: '100%',
  },
  profile: {
    height: windowHeight(55),
    width: windowWidth(85),
    resizeMode: 'contain',
    borderRadius: windowHeight(30),
    marginTop: windowHeight(6),
  },
  qrImg: {
    height: windowHeight(45),
    width: windowWidth(45),
    resizeMode: 'contain',
    left: windowWidth(4),
  },
  qrcode: {
    color: appColors.white,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT16,
    opacity: 0.8,
    textAlign: 'center',
    right: windowWidth(4),
    marginTop: windowHeight(-2),
  },
  textContainer: {
    marginLeft: windowWidth(20),
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    color: appColors.white,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT21,
  },
  content: {
    color: appColors.gray,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT18HALF,
    opacity: 0.9,
    marginTop: windowHeight(5),
  },
});
