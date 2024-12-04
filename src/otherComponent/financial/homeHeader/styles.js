import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle: {
    height: windowHeight(40),
    width: windowWidth(40),
    resizeMode: 'contain',
  },
  title: {
    color: appColors.white,
    marginTop: windowHeight(14),
    fontSize: fontSizes.FONT26,
    fontFamily: appFonts.InterRegular,
    opacity: 0.9,
  },
  content: {
    color: appColors.gray,
    marginTop: windowHeight(3),
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.InterRegular,
    opacity: 0.9,
  },
  user: {
    height: windowHeight(43),
    width: windowWidth(62),
    resizeMode: 'contain',
    marginVertical: windowHeight(5),
    borderRadius: windowHeight(30),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  handImg: {
    height: windowHeight(28),
    width: windowWidth(28),
    resizeMode: 'contain',
    marginTop: windowHeight(12),
    marginHorizontal: windowWidth(13),
  },
  mainContainer: {
    marginTop: windowHeight(7),
    marginHorizontal: windowHeight(18),
  },
  imageContainer: {
    height: windowHeight(70),
    width: windowWidth(70),

    alignItems: 'center',
    justifyContent: 'center',
  },
});
