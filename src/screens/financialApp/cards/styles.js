import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  bottomView: {
    marginHorizontal: windowWidth(23),
    borderColor: appColors.white,
    borderWidth: 1,
    paddingVertical: windowHeight(12),
    borderRadius: windowHeight(9),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: windowHeight(8),
    marginTop: windowHeight(20),
  },
  cardText: {
    color: appColors.white,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.InterMedium,
  },
});
