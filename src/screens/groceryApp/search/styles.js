import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  inputStyle: {
    borderRadius: windowHeight(28),
    height: windowHeight(45),
    backgroundColor: appColors.white,
    elevation: 3,
    shadowColor: '#000000',
    borderWidth: 0,
  },
  inputText: {
    height: windowHeight(45),
  },
  title: {
    fontFamily: appFonts.PublicSansSemiBold,
    fontSize: fontSizes.FONT21,
    left: windowWidth(10),
    color: appColors.black,
    marginTop: windowHeight(23),
    marginHorizontal: windowWidth(17),
    marginBottom: windowHeight(7),
  },
});
