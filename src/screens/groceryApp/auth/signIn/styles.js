import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  scroll: {
    paddingBottom: windowHeight(20),
  },
  imageStyle: {
    width: '100%',
    height: windowHeight(150),
  },
  logo: {
    height: windowHeight(38),
    width: windowWidth(160),
    resizeMode: 'contain',
  },
  mainView: {
    marginHorizontal: windowWidth(20),
    bottom: windowHeight(35),
  },
  textStyle: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.PublicSansRegular,
    width: '90%',
    color: appColors.groceryFont,
    marginVertical: windowHeight(10),
  },
  title: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.PublicSansSemiBold,
    color: appColors.black,
    marginTop: windowHeight(16),
  },
  blankView: {
    height: windowHeight(8),
  },
  forgotView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: windowHeight(2),
    marginBottom: windowHeight(5),
  },
  forgotText: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.PublicSansRegular,
    color: appColors.groceryFont,
  },
});
