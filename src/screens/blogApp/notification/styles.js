import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  margin: {
    margin: windowHeight(10),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
  },
  timeText: {
    color: appColors.blogContent,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT17,
    marginTop: windowHeight(3),
  },
  markAs: {
    color: appColors.blogContent,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT18,
    textDecorationLine: 'underline',
  },
  rowContainer: {
    flexDirection: 'row',
    paddingVertical: windowHeight(10),
    backgroundColor: appColors.verticalLine,
    paddingHorizontal: windowWidth(20),
    marginTop: windowHeight(15),
    borderRadius: windowHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: windowHeight(65),
    width: windowWidth(95),
    borderRadius: windowHeight(4),
  },
  textContainer: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(5),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(120),
  },
});
