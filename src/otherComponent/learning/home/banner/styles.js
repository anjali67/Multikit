import appColors from '@theme/appColors';
import {windowHeight, fontSizes} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default Styles = StyleSheet.create({
  image: {
    height: windowHeight(104),
    borderRadius: windowHeight(9),
  },
  padding: {
    padding: windowHeight(10),
  },
  row: {
    flexDirection: 'row',
  },
  imageStyle: {
    height: windowHeight(180),
    width: windowWidth(125),
    resizeMode: 'contain',
    bottom: windowHeight(51),
  },
  title: {
    color: appColors.white,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT20HALF,
    width: windowWidth(200),
    lineHeight: windowHeight(20),
    width: windowWidth(230),
  },
  margin: {
    marginHorizontal: windowWidth(20),
    marginTop: 3,
  },
  container: {
    backgroundColor: appColors.white,
    marginTop: windowHeight(12),
    width: windowWidth(140),
    borderRadius: windowHeight(3),
    paddingVertical: windowHeight(3.4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterSemiBold,
    fontSize: fontSizes.FONT15,
  },
});
