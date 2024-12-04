import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  addViewContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: windowHeight(12),
  },
  plus: {
    fontSize: fontSizes.FONT21,
    color: appColors.foodBtn,
    marginHorizontal: windowWidth(6),
  },
  addItemText: {
    fontSize: fontSizes.FONT21,
    color: appColors.foodBtn,
    fontFamily: appFonts.LatoMedium,
  },
  imageStyle: {
    height: windowHeight(42),
    width: windowWidth(400),
    resizeMode: 'stretch',
  },
  container: {
    position: 'absolute',
    flexDirection: 'row',
  },
});
