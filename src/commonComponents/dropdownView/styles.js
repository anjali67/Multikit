import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '../../theme/appFonts';

export default styles = StyleSheet.create({
  option: {
    width: '47.2%',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(22),
    alignItems: 'center',
    height: windowHeight(44),
    borderRadius: windowHeight(4),
    flexDirection: 'row',
    backgroundColor: appColors.dropdown,
    justifyContent: 'center',
  },
  optionTxt: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.PublicSansMedium,
    color: appColors.black,
    right: windowWidth(12),
  },
  optionMainView: {
    marginTop: windowHeight(25),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: windowWidth(23),
  },
  dopdownView: {
    left: windowWidth(12),
  },
});
