import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default style = StyleSheet.create({
  margin: {
    marginHorizontal: windowWidth(20),
    marginVertical: windowHeight(20),
  },
  imageStyle: {
    height: windowHeight(85),
    width: windowWidth(123),
    resizeMode: 'contain',
    borderRadius: windowHeight(6),
  },
  textView: {
    marginHorizontal: windowHeight(10),
    marginVertical: windowHeight(6),
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT21,
  },
  content: {
    color: '#9DACB1',
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT18,
  },
  marginTop: {
    marginTop: windowHeight(20),
  },
  aboutContent: {
    color: appColors.learningPlaceholder,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT17HALF,
    lineHeight: windowHeight(17),
    marginTop: windowHeight(7),
  },
  arrowView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  downArrow: {
    padding: windowHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(3),
   
  },
});
