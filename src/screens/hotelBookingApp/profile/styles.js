import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '../../../theme/appColors';

export default styles = StyleSheet.create({
  containerView: {
    paddingVertical: windowHeight(20),
  },
  textView: {
    marginTop: windowHeight(10),
  },
  margin: {
    paddingVertical: windowHeight(7),
    paddingHorizontal: windowWidth(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: windowHeight(74),
    width: windowWidth(110),
    resizeMode: 'cover',
    borderRadius: windowHeight(20),
  },
  logoImg: {
    height: windowHeight(30),
    width: windowWidth(120),
    resizeMode: 'contain',
  },
  title: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.MontserratMedium,
    color: 'rgba(255, 255, 255, 1)',
    marginTop: windowHeight(10),
  },
  email: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.MontserratRegular,
    color: appColors.white,
    opacity: 0.9,
    marginTop: windowHeight(5),
  },
  blankView: {
    height: windowHeight(15),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: windowHeight(18),
    width: '125%',
  },
  crossView: {
    backgroundColor: '#417EDF',
    padding: windowHeight(4),
    borderRadius: windowHeight(4),
  },
});
