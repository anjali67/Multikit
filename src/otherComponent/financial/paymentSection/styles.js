import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginRight: windowWidth(12),
    marginHorizontal: windowWidth(3),
    marginTop: windowHeight(6),
    marginLeft: windowWidth(-1),
  },
  flatlist: {
    margin: windowWidth(20),
  },
  mainContainer: {
    height: windowHeight(68),
    width: windowWidth(104),
    borderBottomWidth: 1.5,
    borderRightWidth: 1.8,
    borderRadius: windowHeight(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: windowHeight(64),
    width: windowWidth(104),
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: appColors.white,
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.InterRegular,
    marginTop: windowHeight(6),
  },
});
