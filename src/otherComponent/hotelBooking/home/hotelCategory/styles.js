import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: windowWidth(15),
  },
  imageStyle: {
    height: windowHeight(40),
    width: windowWidth(40),
    resizeMode: 'contain',
    marginLeft: windowWidth(22),
  },
  name: {
    fontSize: fontSizes.FONT19,
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratMedium,
    textAlign: 'center',
    left: windowWidth(3),
  },
  circle: {
    height: windowHeight(23),
    width: windowWidth(33),
    borderRadius: windowHeight(50),
    position: 'absolute',
    resizeMode: 'contain',
    right: windowWidth(24),
    backgroundColor: '#EBEBEB',
    marginTop: windowHeight(6.7),
  },
});
