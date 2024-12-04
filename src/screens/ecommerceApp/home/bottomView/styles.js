import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    marginHorizontal: windowHeight(13),
    marginTop: windowHeight(34),
  },
  container: {
    height: windowHeight(154),
    width: '98%',
    backgroundColor: appColors.banner,
    borderRadius: windowHeight(7),
  },
  textStyle: {
    backgroundColor: appColors.ecommorcePrimary,
    padding: windowHeight(4.5),
    width: '36%',
    textAlign: 'center',
    borderRadius: windowHeight(4),
    borderBottomRightRadius: windowHeight(0),
    borderBottomLeftRadius: windowHeight(0),
    color: appColors.white,
    fontFamily: appFonts.MontserratSemiBold,
    textTransform: 'uppercase',
  },
  text: {
    width: '45%',
    borderTopLeftRadius: windowHeight(0),
    borderBottomLeftRadius: windowHeight(4),
    borderBottomRightRadius: windowHeight(4),
  },
  discount: {
    color: appColors.white,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT22,
    marginBottom: windowHeight(12),
  },
  textContainer: {
    margin: windowHeight(20),
  },
  row: {
    flexDirection: 'row',
    marginTop: windowHeight(8),
  },
  content: {
    color: appColors.white,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT18,
    marginTop: windowHeight(2),
  },
  dot: {
    backgroundColor: appColors.white,
    height: windowHeight(3),
    width: windowWidth(5),
    borderRadius: windowHeight(20),
    marginHorizontal: windowHeight(6),
    marginTop: windowHeight(10),
  },
  mainContainer: {
    width: '100%',
  },
});
