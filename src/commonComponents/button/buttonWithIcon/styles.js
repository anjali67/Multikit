import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: windowHeight(15),
  },
  btnStyle: {
    width: '97%',
    borderRadius: windowHeight(10),
    height: windowHeight(44),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: appColors.ecommerceFont,
    borderWidth: 1,
    flexDirection: 'row',
  },
  btn: {
    color: appColors.subTitle,
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.MontserratRegular,
  },
  iconView: {
    marginRight: windowWidth(8),
  },
  image: {
    height: windowHeight(24),
    width: windowWidth(24),
    resizeMode: 'contain',
    marginRight: windowWidth(14),
  },
});
