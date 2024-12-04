import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default cabStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomSheet: {
    backgroundColor: appColors.white,
    borderTopLeftRadius: windowHeight(20),
    borderTopRightRadius: windowHeight(20),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: windowHeight(5),
  },
  name: {
    color: appColors.cabContent,
    fontFamily: appFonts.RobotoRegular,
    fontSize: fontSizes.FONT20,
  },
  price: {
    color: appColors.cabText,
    fontFamily: appFonts.RobotoBold,
    fontSize: fontSizes.FONT19,
  },
});
