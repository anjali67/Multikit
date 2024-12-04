import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: windowHeight(3),
  },
  image: {
    height: windowHeight(37),
    width: windowWidth(56),
    resizeMode: 'contain',
  },
  imageView: {
    backgroundColor: appColors.lightBorder,
    paddingHorizontal: windowWidth(16),
    borderRadius: windowHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginHorizontal: windowWidth(20),
  },
  text: {
    fontSize: fontSizes.FONT18HALF,
    color: appColors.label,
    fontFamily: appFonts.MontserratMedium,
  },
  content: {
    fontSize: fontSizes.FONT18,
    color: appColors.foodContent,
    fontFamily: appFonts.MontserratRegular,
    marginTop: windowHeight(5),
  },
  seperator: {
    borderBottomWidth: 1.4,
    borderBottomColor: appColors.lightBorder,
    paddingBottom: windowHeight(8),
    marginBottom: windowHeight(6),
  },
  imageStyle: {
    height: windowHeight(38),
  },
  img: {
    width: '96%',
    resizeMode: 'contain',
    marginTop: windowHeight(6),
    marginBottom: windowHeight(10),
  },
  iconStyle: {
    fontSize: fontSizes.FONT13,
    fontFamily: appFonts.MontserratExtraBold,
    marginTop: windowHeight(2.6),
    color: appColors.reviewText,
  },
  name: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.MontserratMedium,
  },
  linearGradient: {
    borderRadius: windowHeight(10),
  },
  innerContainer: {
    borderRadius: windowHeight(10),
    margin: 1.5,
  },
});
