import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  headingTitle: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT20HALF,
    marginHorizontal: windowWidth(20),
  },
  img: {
    width: '89%',
    resizeMode: 'contain',
    marginVertical: windowHeight(20),
    marginHorizontal: windowWidth(20),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(80),
  },
  top: {
    marginTop: windowHeight(5),
  },
  content: {
    color: appColors.label,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT20,
    marginTop: windowHeight(6),
    marginHorizontal: windowWidth(20),
  },
  image: {
    height: windowHeight(120),
    width: '90%',
    resizeMode: 'cover',
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(15),
    marginBottom: windowHeight(14),
  },
  mainViewStyle: {
    borderRadius: windowHeight(20),
    elevation: 0.6,
    paddingVertical: windowHeight(8),
    right: windowWidth(10),
  },
});
