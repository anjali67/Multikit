import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default Styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  image: {
    height: windowHeight(78),
    width: windowWidth(150),
    resizeMode: 'cover',
    borderRadius: windowHeight(5),
    marginTop: windowHeight(2),
  },
  containerView: {
    backgroundColor: appColors.category,
    width: windowWidth(440),
    paddingVertical: windowWidth(18),
    paddingHorizontal: windowWidth(15),
    borderRadius: windowHeight(4),
    paddingBottom: windowHeight(12),
  },
  textView: {
    marginHorizontal: windowWidth(10),
  },
  title: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterSemiBold,
    fontSize: fontSizes.FONT17,
    width: windowWidth(270),
    lineHeight: windowHeight(18),
  },
  margin: {
    marginTop: windowHeight(6),
  },
  content: {
    color: appColors.learningPlaceholder,
    marginHorizontal: windowHeight(2),
    bottom: windowHeight(1),
  },
  rate: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT17,
    marginHorizontal: windowWidth(5),
  },
  price: {
    fontFamily: appFonts.InterSemiBold,
    fontSize: fontSizes.FONT19HALF,
    color: appColors.learningBtn,
    right: 8,
  },
  marginTop: {
    marginTop: windowHeight(6),
  },
  marginStyle: {
    marginBottom: windowHeight(18),
  },
});
