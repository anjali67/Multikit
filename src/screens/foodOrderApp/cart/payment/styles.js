import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  scrollView: {
    paddingBottom: windowHeight(40),
  },
  mainContainer: {
    marginTop: windowHeight(20),
    marginHorizontal: windowWidth(20),
  },
  mainView: {
    backgroundColor: appColors.white,
    marginTop: windowHeight(12),
    padding: windowHeight(12),
    borderRadius: windowHeight(8),
  },
  title: {
    fontSize: fontSizes.FONT21,
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoBold,
    marginTop: windowHeight(3),
  },
  seperator: {
    borderBottomWidth: 1.4,
    borderBottomColor: appColors.lightBorder,
    paddingBottom: windowHeight(4),
  },
  imageView: {
    paddingHorizontal: windowWidth(25),
    paddingVertical: windowHeight(1),
  },
  gpayImg: {
    height: windowHeight(38),
    width: windowWidth(56),
    resizeMode: 'contain',
  },
  masterImg: {
    height: windowHeight(34),
    width: windowWidth(48),
    resizeMode: 'contain',
  },
  walletsImg: {
    height: windowHeight(26),
    width: windowWidth(32),
    resizeMode: 'contain',
  },
  appleImg: {
    height: windowHeight(28),
    width: windowWidth(35),
    resizeMode: 'contain',
  },
  payDelivery: {
    height: windowHeight(38),
    width: windowWidth(57),
    resizeMode: 'contain',
  },
  payDeliveryImg: {
    paddingHorizontal: windowWidth(20),
  },
});
