import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    borderRadius: windowWidth(26),
  },
  image: {
    width: windowWidth(120),
    height: windowHeight(80),
    resizeMode: 'contain',
    marginHorizontal: windowWidth(6),
    borderRadius: windowHeight(100),
    borderColor: appColors.forgotFont,
  },
  title: {
    fontSize: fontSizes.FONT18s,
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
    bottom: windowHeight(6),
    alignSelf: 'center',
    marginTop: windowHeight(14),
    marginLeft: windowWidth(6),
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: windowHeight(12),
    marginVertical: windowHeight(8),
  },
  mainView: {
    marginTop: windowHeight(11),
  },
});
