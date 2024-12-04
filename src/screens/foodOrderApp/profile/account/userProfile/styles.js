import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default foodOrderStyles = StyleSheet.create({
  mainView: {
    paddingTop: windowHeight(20),
    paddingBottom: windowHeight(10),
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    height: windowHeight(80),
    width: windowWidth(120),
    borderRadius: windowHeight(23),
  },
  textContainer: {
    paddingHorizontal: windowWidth(20),
    marginTop: windowHeight(8),
  },
  title: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
    color: appColors.foodSecondary,
  },
  email: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoRegular,
    color: appColors.foodContent,
    marginTop: windowHeight(5),
  },
  edit: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoMedium,
    color: appColors.foodBtn,
    marginTop: windowHeight(9),
  },
});
