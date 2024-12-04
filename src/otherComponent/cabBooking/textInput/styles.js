import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(20),
    justifyContent: 'space-between',
    marginVertical: windowWidth(12),
    borderColor: appColors.inputBorder,
    borderWidth: 1.2,
    borderRadius: windowWidth(28),
    paddingHorizontal: windowWidth(16),
    paddingVertical: windowWidth(3),
  },
  inputStyle: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.RobotoRegular,
    width: windowWidth(300),
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '12%',
  },
  image: {
    height: windowWidth(24),
    width: windowWidth(53),
    resizeMode: 'contain',
    marginTop: windowWidth(17),
    marginRight: windowWidth(0),
  },
});
