import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  createAcc: {
    textAlign: 'center',
    marginTop: windowHeight(12),
    fontFamily: appFonts.PublicSansRegular,
    fontSize: fontSizes.FONT18,
    color: appColors.groceryFont,
  },
  signInView: {
    marginTop: windowHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight(20),
  },
  img: {
    width: '98%',
    resizeMode: 'contain',
  },
  signIn: {
    textAlign: 'center',
    fontFamily: appFonts.PublicSansRegular,
    fontSize: fontSizes.FONT18,
    color: appColors.groceryBtn,
    position: 'absolute',
    marginHorizontal: windowWidth(20),
    padding: windowHeight(6),
    backgroundColor: appColors.white,
  },
  view: {
    paddingVertical: windowHeight(80),
  },
});
