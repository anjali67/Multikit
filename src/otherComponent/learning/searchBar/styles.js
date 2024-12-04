import appColors from '@theme/appColors';
import {windowHeight, fontSizes} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default Styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    backgroundColor: appColors.bgColor,
    height: windowHeight(38),
    borderRadius: windowHeight(20),
    paddingLeft: windowWidth(10),
    marginVertical: windowHeight(7),
    width: windowWidth(442),
    marginTop: windowHeight(20),
  },
  textInput: {
    fontFamily: appFonts.InterRegular,
    color: appColors.subTitle,
    fontSize: fontSizes.FONT20,
    width: windowWidth(348),
    right: windowWidth(8),
    bottom: windowHeight(1),
  },
});
