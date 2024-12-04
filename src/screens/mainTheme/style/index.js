import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.grayLight,
  },
  title: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
  },
  margin: {
    marginHorizontal: windowHeight(5),
    marginTop: windowHeight(15),
  },
  marginTop: {
    marginTop: windowHeight(10),
  },
  btnView: {
    marginHorizontal: windowHeight(20),
    backgroundColor: appColors.verticalLine,
    paddingVertical: windowHeight(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
    marginVertical: windowHeight(4),
  },
  imageStyle: {
    height: windowHeight(600),
    width: windowWidth(190),
    resizeMode: 'contain',
  },
});
