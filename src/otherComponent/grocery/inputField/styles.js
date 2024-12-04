import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.white,
    borderWidth: 1.6,
    borderColor: appColors.border,
    height: windowHeight(45),
    borderRadius: windowHeight(12),
    paddingLeft: windowWidth(20),
    marginVertical: windowHeight(7),
  },
  textInput: {
    flex: 1,
    fontFamily: appFonts.PublicSansRegular,
    color: appColors.groceryFont,
    fontSize: fontSizes.FONT17,
    marginLeft: windowWidth(10),
  },
});
