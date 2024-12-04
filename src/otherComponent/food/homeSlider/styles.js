import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  swiper: {
    marginLeft: 2,
  },
  mainView: {
    width: '100%',
    height: windowHeight(200),
    borderRadius: windowHeight(10),
    paddingHorizontal: windowWidth(14),
  },
  image: {
    width: windowWidth(430),
    height: windowHeight(160),
    resizeMode: 'contain',
  },
  contentView: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(20),
  },
  title: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoBold,
    color: appColors.foodSecondary,
    width: '55%',
    lineHeight: windowHeight(20),
  },
  offer: {
    height: windowHeight(50),
    width: windowWidth(180),
    right: windowWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerText: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
    color: appColors.white,
    width: '55%',
    lineHeight: windowHeight(20),
  },
  text: {
    fontSize: fontSizes.FONT15,
    fontFamily: appFonts.LatoMedium,
    color: appColors.foodContent,
  },
  activeDot: {
    backgroundColor: appColors.white,
    width: windowWidth(50),
    height: 6,
    borderRadius: 4,

    top: windowHeight(30),
  },
  inActiveDot: {
    backgroundColor: appColors.white,
    top: windowHeight(30),
  },
});
