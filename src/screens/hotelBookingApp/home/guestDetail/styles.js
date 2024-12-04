import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    width: windowWidth(325),
    borderRadius: windowHeight(7),
  },
  row: {
    flexDirection: 'row',
    marginRight: windowWidth(16),
  },
  mainView: {
    marginTop: windowHeight(12),
    backgroundColor: appColors.reviewsBg,
    width: windowWidth(90),
    borderRadius: windowHeight(7),
    height: windowHeight(55),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT19,
    marginRight: windowWidth(9),
  },
  blankView: {
    height: windowHeight(10),
  },
  top: {
    marginVertical: windowHeight(3),
  },
  btnView: {
    width: windowWidth(238),
    paddingVertical: windowHeight(11),
  },
  fontsize: {
    fontSize: fontSizes.FONT18,
  },
});
