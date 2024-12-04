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
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoSemibold,
  },
  content: {
    fontSize: fontSizes.FONT19,
    color: appColors.foodContent,
    fontFamily: appFonts.LatoMedium,
    marginTop: windowHeight(2),
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
});
