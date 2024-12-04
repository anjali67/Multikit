import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    backgroundColor: appColors.white,
    borderRadius: windowHeight(12),
    marginTop: windowHeight(18),
    width: windowHeight(143),
    left: windowWidth(7),
  },
  image: {
    height: windowHeight(90),
    width: windowWidth(210),
  },
  boxContainer: {
    backgroundColor: appColors.white,
    paddingHorizontal: windowWidth(12),
    borderRadius: windowHeight(5),
    paddingVertical: windowHeight(1.9),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT20,
  },
  content: {
    color: appColors.foodContent,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT18,
    marginTop: windowHeight(1.8),
  },
  row: {
    flexDirection: 'row',
  },
  marginTop: {
    marginTop: windowHeight(6),
  },
  leftView: {
    marginRight: windowWidth(4),
  },
  time: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT16,
    marginHorizontal: windowWidth(4),
  },
  offer: {
    color: appColors.foodBtn,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT17,
    margin: windowHeight(1),
    marginHorizontal: windowHeight(4),
  },
  rating: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoSemibold,
    fontSize: fontSizes.FONT16,
  },
  offerImg: {
    height: windowHeight(20),
    width: windowWidth(20),
    resizeMode: 'contain',
    bottom: windowHeight(1),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(40),
    marginTop: windowHeight(10),
  },
});
