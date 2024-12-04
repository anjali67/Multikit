import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  image: {
    height: windowHeight(150),
    width: '100%',
    resizeMode: 'contain',
    marginBottom: windowHeight(8),
    borderRadius: windowHeight(10),
  },
  margin: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(9),
  },
  row: {
    flexDirection: 'row',
  },
  textView: {
    position: 'absolute',
    paddingHorizontal: windowHeight(17),
    paddingVertical: windowHeight(8),
    height: windowHeight(150),
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.33)',
    borderRadius: windowHeight(10),

    borderRadius: windowHeight(10),
    right: windowWidth(1),
  },
  text: {
    color: appColors.white,
    marginTop: windowHeight(3),
    fontFamily: appFonts.NunitoSansSemiBold,
    fontSize: fontSizes.FONT21,
    opacity: 0.9,
  },
  title: {
    color: appColors.white,
    fontFamily: appFonts.NunitoSansSemiBold,
    fontSize: fontSizes.FONT21HALF,
  },
});
