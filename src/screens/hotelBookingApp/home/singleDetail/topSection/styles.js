import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  img: {
    height: windowWidth(280),
    width: '100%',
    resizeMode: 'stretch',
  },
  innerView: {
    position: 'absolute',
    margin: windowHeight(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  circleView: {
    height: windowHeight(28),
    width: windowWidth(40),
    borderRadius: windowHeight(100),
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth(100),
  },
  gradiantView: {
    marginHorizontal: windowHeight(11),
    bottom: windowHeight(16),
    paddingHorizontal: windowHeight(12),
    borderRadius: windowHeight(10),
    paddingVertical: windowHeight(14),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: appColors.white,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT22,
    marginHorizontal: windowWidth(16),
  },
  textStyle: {
    color: appColors.white,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18HALF,
    marginHorizontal: windowWidth(10),
    opacity: 0.9,
    marginTop: windowHeight(1),
  },
  detailText: {
    color: appColors.white,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18,
    marginHorizontal: windowWidth(18),
    marginTop: windowHeight(3),
    opacity: 0.9,
  },
  textContainer: {
    marginTop: windowHeight(20),
    backgroundColor: 'red',
  },
});
