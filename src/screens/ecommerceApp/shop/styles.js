import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  titleStyle: {
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT21,
    color: appColors.ecommorcePrimary,
  },
  mainContainer: {
    marginTop: windowHeight(2),
  },
  horizontalLine: {
    borderTopColor: appColors.divider,
    borderTopWidth: 1,
    marginVertical: windowHeight(19),
    marginHorizontal: windowWidth(20),
  },
  categoryView: {
    marginHorizontal: windowWidth(20),
  },
  inputContainer: {
    width: '82%',
    height: '69%',
    marginTop: windowHeight(10),
  },
  container: {
    marginHorizontal: windowHeight(14),
  },
  contentStyle: {
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT19,
    color: appColors.subTitle,
    marginHorizontal: windowWidth(22),
    marginBottom: windowHeight(6),
  },
});
