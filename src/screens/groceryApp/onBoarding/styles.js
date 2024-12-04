import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '105%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blankView: {
    height: '68%',
  },
  logo: {
    height: windowHeight(50),
    width: windowWidth(170),
    resizeMode: 'contain',
  },
  heading: {
    color: appColors.groceryFont,
    fontSize: fontSizes.FONT23,
    width: windowWidth(290),
    textAlign: 'center',
    fontFamily: appFonts.PublicSansMedium,
    top: windowHeight(3),
  },
  blank: {
    height: windowHeight(20),
  },
  btnStyle: {
 right:windowWidth(-15)
  },
  btn1Style : {
    left:windowWidth(25)
 },
});
