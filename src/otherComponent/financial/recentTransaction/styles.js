import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    marginTop: windowHeight(16),
    marginHorizontal: windowWidth(20),
  },
  container: {
    width: '100%',
    backgroundColor: '#141414',
    paddingVertical: windowHeight(13),
    borderRadius: windowHeight(12),
    marginBottom: windowHeight(16),
    paddingHorizontal: windowWidth(4),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(14),
  },
  name: {
    color: appColors.gray,
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.InterRegular,
    opacity: 0.8,
  },
  letter: {
    color: appColors.white,
    fontSize: fontSizes.FONT29,
    fontFamily: appFonts.InterBold,
    opacity: 0.8,
    textTransform: 'capitalize',
  },
  image: {
    height: windowHeight(46),
    width: windowWidth(65),
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(6),
  },
  textContainer: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(4),
    width: '90%',
  },
  textStyle: {
    color: '#696969',
    fontSize: fontSizes.FONT17HALF,
    fontFamily: appFonts.InterRegular,
    opacity: 0.8,
    marginTop: windowHeight(4),
  },
  price: {
    color: appColors.gray,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.InterRegular,
    opacity: 0.8,
    marginTop: windowHeight(10),
  },
  letterView: {
    height: windowHeight(46),
    width: windowWidth(61),
    backgroundColor: '#57ADDD',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(8),
  },
  mainView: {
    maxWidth: windowWidth(320),
  },
});
