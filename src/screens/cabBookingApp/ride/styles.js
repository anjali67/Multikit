import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  title: {
    fontFamily: appFonts.RobotoMedium,
    color: appColors.cabText,
    fontSize: fontSizes.FONT23,
    marginBottom: windowHeight(24),
  },
  textView: {
    paddingTop: windowHeight(35),
    paddingHorizontal: windowWidth(25),
    paddingBottom: windowHeight(6),
  },
  textContainer: {
    paddingHorizontal: windowWidth(40),
    paddingTop: windowHeight(4),
    marginHorizontal: windowWidth(12),
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: appColors.white,
    paddingVertical: windowHeight(8),
    paddingHorizontal: windowWidth(24),
    borderRadius: windowHeight(8),
    marginBottom: windowHeight(7),
    shadowColor: 'black',
    shadowOpacity: 0.9,
  },
  baground: {
    height: windowHeight(30),
    width: windowWidth(45),
  },
  imageView: {
    position: 'absolute',
  },
  image: {
    height: windowHeight(40),
    width: windowWidth(70),
    resizeMode: 'contain',
    bottom: windowHeight(3),
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: appFonts.RobotoBold,
    color: appColors.cabText,
    fontSize: fontSizes.FONT19,
  },
  content: {
    fontFamily: appFonts.RobotoRegular,
    color: appColors.foodContent,
    fontSize: fontSizes.FONT19,
    marginTop: windowHeight(4),
  },
  price: {
    marginTop: windowHeight(10),
    fontSize: fontSizes.FONT21HALF,
    color: appColors.cabText,
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(20),
  },
});
