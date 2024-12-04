import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  image: {
    height: windowHeight(70),
    width: '100%',
    resizeMode: 'stretch',
  },
  mainView: {
    padding: windowHeight(15),
    flexDirection: 'row',
  },
  profile: {
    height: windowHeight(40),
    width: windowWidth(58),
    resizeMode: 'contain',
    borderRadius: windowHeight(30),
    marginHorizontal: windowWidth(15),
  },
  title: {
    color: appColors.white,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT21,
    opacity: 0.9,
  },
  content: {
    color: appColors.gray,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT18HALF,
    opacity: 0.8,
    marginTop: windowHeight(2),
  },
  top: {
    margin: windowHeight(10),
    fontSize: fontSizes.FONT21,
    opacity: 0.8,
  },
});
