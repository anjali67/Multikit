import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(16),
    justifyContent: 'space-between',
  },
  inputStyle: {
    color: appColors.financeContent,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.InterRegular,
    width: windowWidth(360),
    textAlign: 'right',
    paddingRight: windowWidth(20),
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '12%',
  },
});
