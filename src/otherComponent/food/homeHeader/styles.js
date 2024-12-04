import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowHeight(20),
  },
  image: {
    height: windowHeight(30),
    width: windowWidth(30),
    resizeMode: 'contain',
    marginTop: windowHeight(4),
  },
  row: {
    flexDirection: 'row',
  },
  textView: {
    marginLeft: windowWidth(16),
  },
  text: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT21,
    marginRight: windowWidth(8),
  },
  content: {
    color: appColors.foodContent,
    fontFamily: appFonts.LatoSemibold,
    fontSize: fontSizes.FONT19,
    marginRight: windowWidth(5),
  },
  notificationView: {
    marginTop: windowHeight(6),
    paddingHorizontal: windowWidth(4),
  },
});
