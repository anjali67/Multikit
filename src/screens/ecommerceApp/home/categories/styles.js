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
    width: windowWidth(72),
    height: windowHeight(50),
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
    margin: windowHeight(4),
  },
  mainView: {
  marginTop: windowHeight(16),
  },
});
