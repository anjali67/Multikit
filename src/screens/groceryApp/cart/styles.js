import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  img: {
    marginVertical: windowHeight(13),
    width: '100%',
    resizeMode: 'contain',
  },
  btnStyle: {
    width: '90%',
    backgroundColor: appColors.groceryBtn,
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(25),
  },
  blank: {
    height: windowHeight(22),
  },
  btn: {
    color: appColors.white,
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.PublicSansRegular,
  },
  scrollView: {
    paddingBottom: windowHeight(20),
    height: '100%',
    width: '100%',
  },
  imageStyle: {
    width: windowWidth(50),
    height: windowHeight(30),
    resizeMode: 'contain',
  },
});
