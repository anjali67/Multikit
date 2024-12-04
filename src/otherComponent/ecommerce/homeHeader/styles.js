import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  imageStyle: {
    height: windowHeight(60),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    flexDirection: 'row',
    marginTop: windowWidth(25),
    marginHorizontal: windowWidth(20),
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
    paddingBottom: windowHeight(10),
  },
  row: {
    flexDirection: 'row',
    width: '73%',
  },
  logoImg: {
    marginLeft: windowWidth(10),
    height: windowHeight(20),
    width: windowWidth(100),
    resizeMode: 'contain',
  },
  title: {
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.MontserratMedium,
    color: appColors.ecommorcePrimary,
    marginHorizontal: windowWidth(20),
    bottom: windowHeight(1),
  },
});
