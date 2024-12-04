import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: windowHeight(10),
    height: windowHeight(50),
    alignItems: 'center',
    bottom: windowHeight(4),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT18,
    color: appColors.label,

    bottom: windowHeight(1),
  },
  curruncyText: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT19,
    color: appColors.reviewText,
    marginHorizontal: windowWidth(10),
  },
  fontsize: {
    fontSize: fontSizes.FONT17HALF,
  },
  btnView: {
    width: windowWidth(198),
    paddingVertical: windowHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(6),
    bottom: windowHeight(3),
  },
  btnText: {
    fontSize: fontSizes.FONT20,
  },
});
