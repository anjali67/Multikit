import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default learningStyle = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  image: {
    height: windowHeight(140),
    width: windowWidth(100),
    resizeMode: 'contain',
  },
  marginTop: {
    marginTop: windowHeight(10),
  },
  textView: {
    marginTop: windowHeight(15),
    justifyContent: 'center',
    marginHorizontal: windowWidth(20),
  },
  title: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT21,
    marginHorizontal: windowWidth(5),
    marginBottom: windowHeight(4),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(60),
  },
  margin: {
    marginHorizontal: windowHeight(10),
    marginTop: windowHeight(15),
  },
  titleStyle: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterSemiBold,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(7),
    marginBottom: windowHeight(9),
    marginHorizontal: windowWidth(20),
  },
  marginHorizontal: {
    marginHorizontal: windowWidth(20),
  },
  blankView: {
    height: windowHeight(50),
  },
});
