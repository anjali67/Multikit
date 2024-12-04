import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainView: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: windowWidth(20),
    marginTop: windowHeight(10),
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontFamily: appFonts.PublicSansRegular,
    fontSize: fontSizes.FONT20,
    marginLeft: windowWidth(6),
    color: appColors.groceryFont,
    marginRight: 0,
    marginLeft: windowWidth(16),
  },
  profile: {
    width: windowWidth(48),
    height: windowHeight(32),
    borderRadius: windowHeight(50),
    marginLeft: windowWidth(16),
  },
  logoImg: {
    marginLeft: windowWidth(10),
    height: windowHeight(40),
    width: windowWidth(120),
    resizeMode: 'contain',
  },
  margin: {
    marginHorizontal: windowWidth(10),
  },
});
