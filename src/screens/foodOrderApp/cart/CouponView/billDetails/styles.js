import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainView: {
    borderRadius: windowWidth(10),
    marginTop: windowHeight(10),
  },
  title: {
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.PublicSansSemiBold,
    color: appColors.black,
    marginTop: windowWidth(20),
  },
  mainContainer: {
    backgroundColor: appColors.white,
    marginTop: windowHeight(12),
    padding: windowHeight(14),
    borderRadius: windowHeight(10),
    marginBottom: windowHeight(6),
  },
  border: {
    borderBottomWidth: 2,
    paddingVertical: windowHeight(3),
    borderColor: appColors.lightBorder,
    marginBottom: windowHeight(6),
  },
  titleStyle: {
    fontSize: fontSizes.FONT21,
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoSemibold,
  },
  addTip: {
    color: 'red',
  },
  btnStyle: {
    width: '103%',
    backgroundColor: appColors.foodBtn,
    marginTop: windowHeight(8),
    borderRadius: windowHeight(5),
    height: windowHeight(41),
  },
  btn: {
    color: appColors.white,
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoMedium,
  },
  addressText: {
    color: appColors.foodBtn,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoSemibold,
  },
});
