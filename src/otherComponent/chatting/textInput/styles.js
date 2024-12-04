import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  main: {
    marginHorizontal: windowWidth(20),
  },
  label: {
    color: appColors.chatContent,
    fontFamily: appFonts.RubikRegular,
    fontSize: fontSizes.FONT16,
  },
  textInput: {
    fontFamily: appFonts.RubikRegular,
    fontSize: fontSizes.FONT20,
    paddingVertical: windowHeight(0),
    marginTop: windowHeight(3),
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    borderColor: appColors.chatContent,
    borderBottomWidth: 1,
    width: windowWidth(100),
    justifyContent: 'center',
    bottom: windowHeight(2),
  },
  iconView: {
    marginTop: windowHeight(10),
    right: windowWidth(4),
  },
});
