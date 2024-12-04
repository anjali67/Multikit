import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  scrollView: {
    paddingVertical: windowHeight(3),
    marginTop: windowHeight(8),
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth(10),
    marginHorizontal: windowWidth(8),
    flexDirection: 'row',
    backgroundColor: appColors.white,
    paddingHorizontal: windowHeight(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: windowWidth(38),
    height: windowHeight(38),
    resizeMode: 'contain',
  },
  imageStyle: {
    width: windowWidth(26),
    height: windowHeight(26),
    resizeMode: 'contain',
  },
  title: {
    fontSize: fontSizes.FONT19,
    color: appColors.black,
    fontFamily: appFonts.LatoSemibold,
    bottom: windowHeight(6),
    alignSelf: 'center',
    marginHorizontal: windowWidth(12),
    marginTop: windowHeight(12),
  },
  left: {
    marginLeft: windowWidth(10),
  },
});
