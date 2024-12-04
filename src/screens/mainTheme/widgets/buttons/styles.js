import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  buttonView: {
    height: windowHeight(33.5),
    backgroundColor: appColors.green,
    borderRadius: windowHeight(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: windowHeight(18),
    width: '65%',
  },
  text: {
    color: appColors.white,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT18HALF,
    opacity: 0.9,
  },
  row: {
    flexDirection: 'row',
  },
  textStyle: {
    color: appColors.green,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT20,
  },
  btnStyle: {
    width: '98%',
    height: windowHeight(43),
    borderRadius: windowHeight(10),
    backgroundColor: appColors.white,
    borderColor: appColors.green,
    borderWidth: 1,
  },
  btn: {
    height: windowHeight(34),
    borderRadius: windowHeight(5),
    width: '40%',
  },
});
