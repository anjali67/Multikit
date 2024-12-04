import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    paddingBottom: windowHeight(60),
  },
  mainContainer: {
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
    marginHorizontal: windowHeight(20),
    marginTop: windowHeight(15),
    marginBottom: windowHeight(7),
    fontSize: fontSizes.FONT19,
    color: appColors.black,
    fontFamily: appFonts.PublicSansSemiBold,
  },
});
