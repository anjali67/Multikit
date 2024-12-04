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
  },
  textView: {
    paddingTop: windowHeight(35),
    paddingHorizontal: windowWidth(25),
    paddingBottom: windowHeight(10),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    paddingHorizontal: windowWidth(25),
    paddingTop: windowHeight(4),
  },
  name: {
    fontFamily: appFonts.RobotoMedium,
    color: appColors.cabText,
    fontSize: fontSizes.FONT19,
    marginHorizontal: windowWidth(7),
  },

  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: appColors.white,
    paddingVertical: windowHeight(8),
    paddingHorizontal: windowWidth(20),
    borderRadius: windowHeight(8),
    marginBottom: windowHeight(7),
    marginTop: windowHeight(10),
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 1,
  },
  baground: {
    height: windowHeight(40),
    width: windowWidth(60),

    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    position: 'absolute',
  },
  image: {
    height: windowHeight(30),
    width: windowWidth(60),
    resizeMode: 'contain',
    bottom: windowHeight(0),
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
    marginTop: windowHeight(14),
    fontSize: fontSizes.FONT20,
    color: appColors.foodContent,
    fontFamily: appFonts.RobotoRegular,
  },
  divider: {
    width: '102%',
    resizeMode: 'contain',
    marginTop: windowHeight(10),
    marginBottom: windowHeight(10),
  },
  nameStyle: {
    color: appColors.cabText,
    fontFamily: appFonts.RobotoMedium,
    fontSize: fontSizes.FONT20,
  },
  rowStyle: {
    marginVertical: windowHeight(2),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(20),
  },
  blankView: {
    height: windowHeight(5),
  },
});
