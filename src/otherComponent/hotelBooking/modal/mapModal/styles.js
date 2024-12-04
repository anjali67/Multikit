import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  row: {
    marginTop: windowHeight(14),
  },
  textStyle: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
  },
  imageStyle: {
    height: windowHeight(80),
    width: windowWidth(120),
    marginTop: windowHeight(10),
    marginRight: windowWidth(4),
    borderRadius: windowWidth(10),
    resizeMode: 'contain',
    marginLeft: windowWidth(18),
  },
  textContainer: {
    marginTop: windowHeight(15),
  },
  rowStyle: {
    height: windowHeight(105),
    marginRight: windowWidth(16),
    marginHorizontal: windowWidth(0),
    backgroundColor: appColors.white,
  },
  containerView: {
    paddingVertical: windowHeight(2),
    top: windowHeight(-3),
  },
  fontsize: {
    fontSize: fontSizes.FONT17,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  mainView: {
    position: 'absolute',
    bottom: 0,
    height: '37%',
  },
  loaderView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%',
    width: '100%',
  },
});
