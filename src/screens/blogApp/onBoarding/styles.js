import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  image: {
    height: windowHeight(700),
    width: windowWidth(480),
    resizeMode: 'cover',
  },
  bottomView: {
    bottom: windowHeight(20),
    position: 'absolute',
    marginHorizontal: windowWidth(20),
    width: windowWidth(435),
  },

  activeDot: {
    height: windowHeight(4.3),
    borderRadius: windowHeight(3),
    backgroundColor: appColors.fontColor,
    marginHorizontal: windowWidth(3),
    width: windowWidth(80),
  },
  inActiveDot: {
    height: windowHeight(4.3),
    borderRadius: windowHeight(3),
    backgroundColor: '#C0C0C0',
    marginHorizontal: windowWidth(3),
    width: windowWidth(30),
  },

  mainContainer: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleView: {
    height: windowHeight(40),
    width: windowHeight(40),
    backgroundColor: appColors.fontColor,
    borderRadius: windowHeight(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(8),
  },
  title: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT20,
    marginVertical: windowHeight(8),
  },
  content: {
    color: appColors.blogContent,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT18,
    marginVertical: windowHeight(6),
  },
  blankView: {
    height: windowHeight(10),
  },
});
