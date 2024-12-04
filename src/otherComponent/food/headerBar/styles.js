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
    position: 'absolute',
    marginVertical: windowWidth(34),
    marginHorizontal: windowWidth(20),
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '73%',
  },
  title: {
    fontSize: fontSizes.FONT24,
    fontFamily: appFonts.LatoMedium,
    color: appColors.white,
    marginHorizontal: windowWidth(20),
    bottom: windowHeight(1),
  },
});
