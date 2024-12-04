import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  header: {
    height: '32%',
    backgroundColor: appColors.green,
    position: 'absolute',
    width: '100%',
  },
  innerView: {
    marginHorizontal: windowWidth(10),
    height: windowHeight(40),
    backgroundColor: appColors.white,
    width: '80%',
  },
  container: {
    backgroundColor: appColors.white,
    marginVertical: windowHeight(7),
    marginHorizontal: windowWidth(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(6),
    borderColor: appColors.lightGray,
    borderWidth: 1.5,
  },
  left: {
    width: windowWidth(210),
    marginHorizontal: windowWidth(20),
  },
  heading: {
    color: appColors.fontColor,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.MontserratMedium,
  },
  subTitle: {
    top: windowHeight(7),
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT17,
  },
  imageStyle: {
    height: windowHeight(85),
    width: windowWidth(190),
    resizeMode: 'cover',
    borderRadius: windowHeight(6),
  },
  contentContainerStyle: {
    paddingBottom: 10,
  },
});
