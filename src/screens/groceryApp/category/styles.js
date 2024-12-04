import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  title: {
    marginHorizontal: windowHeight(20),
    marginTop: windowHeight(20),
    marginBottom: windowHeight(7),
    fontSize: fontSizes.FONT19,
    color: appColors.black,
    fontFamily: appFonts.PublicSansSemiBold,
  },
  image: {
    height: windowHeight(60),
    width: windowWidth(90),
    resizeMode: 'contain',
  },
  mainView: {
    marginVertical: windowHeight(10),
    marginHorizontal: windowWidth(10),
    left: windowHeight(8),
  },
  container: {
    backgroundColor: appColors.category,
    paddingHorizontal: windowHeight(13),
    paddingVertical: windowHeight(10),
    borderRadius: windowHeight(5),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  titleStyle: {
    fontFamily: appFonts.PublicSansMedium,
    color: appColors.black,
    textAlign: 'center',
    marginTop: windowHeight(7),
    fontSize: fontSizes.FONT19,
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
});
