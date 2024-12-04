import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    marginHorizontal: windowWidth(20),
    borderRadius: windowWidth(10),
    marginTop: windowHeight(18),
  },
  title: {
    fontSize: fontSizes.FONT22,
    marginBottom: windowHeight(6),
    fontFamily: appFonts.InterMedium,
    color: appColors.learningBtn,
    marginTop: windowWidth(4),
  },
  data: {
    fontSize: fontSizes.FONT19,
    color: appColors.learningBtn,
    fontFamily: appFonts.InterRegular,
    marginBottom: windowHeight(3),
  },
  dataView: {
    marginTop: windowHeight(3),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  deliveryView: {
    borderBottomWidth: 1.8,
    paddingBottom: windowHeight(10),
    borderColor: appColors.line,
  },
  amountView: {
    marginTop: windowHeight(12),
    justifyContent: 'space-between',
    marginBottom: windowHeight(10),
    flexDirection: 'row',
  },
  amount: {
    fontSize: fontSizes.FONT21HALF,
    color: appColors.black,
    fontFamily: appFonts.InterMedium,
  },
  price: {
    fontSize: fontSizes.FONT19,
    color: appColors.black,
    fontFamily: appFonts.PublicSansSemiBold,
  },
});
