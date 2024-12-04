import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainView: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    backgroundColor: appColors.reviewsBg,
    marginTop: windowHeight(8),
    paddingRight: windowWidth(43),
    paddingVertical: windowHeight(10),
    paddingLeft: windowWidth(20),
    borderRadius: windowHeight(10),
  },
  name: {
    fontFamily: appFonts.MontserratMedium,
    color: appColors.reviewText,
    fontSize: fontSizes.FONT19,
    paddingBottom: windowHeight(3),
  },
  date: {
    fontFamily: appFonts.MontserratMedium,
    color: appColors.onBoardGradiant,
    fontSize: fontSizes.FONT19,
    paddingBottom: windowHeight(3),
  },
  time: {
    fontFamily: appFonts.MontserratMedium,
    color: appColors.label,
    fontSize: fontSizes.FONT19,
  },
  horizontalLine: {
    borderWidth: 0.5,
    borderColor: appColors.gray,
    margin: 2,
    width: windowWidth(20),
  },
  lineView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
