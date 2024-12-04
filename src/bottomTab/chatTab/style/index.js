import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainTabContainer: {
    flex: 1,
    backgroundColor: appColors.white,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    height: windowHeight(65),
    width: '100%',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    height: windowHeight(60),
    backgroundColor: '#EEEEEE',
    paddingHorizontal: windowWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth(424),
    bottom: windowHeight(20),
    borderRadius: windowHeight(30),
  },
  label: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.RubikRegular,
    color: appColors.chatText,
    marginTop: windowHeight(2),
  },
  mainView: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: windowHeight(16),
    width: windowWidth(16),
    resizeMode: 'contain',
    top: windowHeight(14),
    right: windowHeight(2),
  },
});
