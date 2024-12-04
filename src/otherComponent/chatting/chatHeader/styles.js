import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  backArrow: {
    right: windowWidth(8),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: windowHeight(15),
  },
  title: {
    color: appColors.chatText,
    fontFamily: appFonts.RubikMedium,
    fontSize: fontSizes.FONT26,
  },
  text: {
    color: appColors.chatText,
    fontFamily: appFonts.RubikMedium,
    fontSize: fontSizes.FONT20,
  },
  content: {
    color: appColors.chatText,
    fontFamily: appFonts.RubikRegular,
    fontSize: fontSizes.FONT15,
  },
  image: {
    height: windowHeight(43),
    width: windowWidth(63),
    resizeMode: 'contain',
    borderRadius: windowHeight(30),
  },
  textContainer: {
    marginHorizontal: windowWidth(20),
    marginVertical: windowHeight(0),
  },
  blankView: {
    marginHorizontal: windowWidth(8),
  },
});
