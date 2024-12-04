import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  flatlist: {
    marginVertical: windowWidth(20),
    marginTop: windowHeight(17),
    marginLeft: windowWidth(10),
  },
  contentContainerStyle: {
    right: windowWidth(20),
  },

  name: {
    color: appColors.gray,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.InterRegular,
    marginTop: windowHeight(8),
    textAlign: 'center',
    right: windowWidth(20),
    lineHeight: windowHeight(20),
  },
  container: {
    height: windowHeight(56),
    width: windowWidth(84),
    backgroundColor: appColors.financeBg,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(6),
    borderColor: appColors.fontColor,
    borderWidth: 1,
  },
  textContainer: {
    width: 79,
    marginHorizontal: windowWidth(12),
  },
});
