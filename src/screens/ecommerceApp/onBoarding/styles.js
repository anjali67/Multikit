import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  loginStyle: {
    width: '88%',
    marginVertical: windowHeight(15),
    borderRadius: windowHeight(12),
    height: windowHeight(47),
    borderColor: appColors.ecommerceFont,
    borderWidth: 1,
  },
  loginBtn: {
    color: appColors.subTitle,
    fontSize: fontSizes.FONT23,
    fontFamily: appFonts.MontserratRegular,
  },
  content: {
    marginHorizontal: windowWidth(45),
    marginTop: windowHeight(2),
    marginBottom: windowHeight(40),
  },
  contentStyle: {
    color: appColors.subTitle,
    textAlign: 'center',
    fontFamily: appFonts.MontserratRegular,
    lineHeight: windowHeight(22),
    fontSize: fontSizes.FONT18,
  },
});
