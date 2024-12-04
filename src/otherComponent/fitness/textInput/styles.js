import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  sectionStyle: {
    height: windowHeight(47),
    borderRadius: windowHeight(7),
    paddingLeft: windowWidth(3),
    marginVertical: windowHeight(7),
    width: '100%',
    backgroundColor: appColors.white,
    opacity: 0.2,
    position: 'absolute',
  },
  textInput: {
    width: '96%',
    fontFamily: appFonts.NunitoSansSemiBold,
    color: appColors.foodContent,
    fontSize: fontSizes.FONT20,
    marginHorizontal: 7,
  },
  mainContainer: {
    marginBottom: windowHeight(14),
    height: windowHeight(47),
    justifyContent: 'center',
  },
});
