import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import {windowWidth} from '@theme/appConstant';

export default Styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    marginTop: windowHeight(18),
    marginHorizontal: windowWidth(18),
    backgroundColor: appColors.fontColor,
    height: windowHeight(70),
    borderRadius: windowHeight(9),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: windowHeight(13),
    paddingHorizontal: windowWidth(30),
    marginBottom: windowHeight(20),
  },
  title: {
    color: appColors.white,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT19,
  },
  content: {
    color: appColors.gray,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT17HALF,
    opacity: 0.9,
    marginTop: windowHeight(5),
  },
  mainView: {
    marginTop: windowHeight(6),
    backgroundColor: appColors.gradient1,
    height: windowHeight(31),
    width: windowWidth(45),
    borderRadius: windowHeight(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusView: {
    color: appColors.white,
    fontFamily: appFonts.InterExtraBold,
    fontSize: fontSizes.FONT23,
  },
});
