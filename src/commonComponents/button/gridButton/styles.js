import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  btnView: {
    backgroundColor: appColors.white,
    paddingHorizontal: windowHeight(42),
    paddingVertical: windowHeight(10),
    borderRadius: windowHeight(5),
    marginHorizontal: windowWidth(3),
  },
  btnText: {
    color: appColors.groceryBtn,
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.PublicSansSemiBold,
  },
});
