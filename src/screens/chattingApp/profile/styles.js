import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: windowHeight(500),
    width: '100%',
    opacity: 0.017,
  },
  mainView: {
    position: 'absolute',
    marginTop: windowHeight(10),
  },
  containerView: {
    position: 'absolute',
    height: '130%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: appColors.chatText,
    fontFamily: appFonts.RubikMedium,
    fontSize: fontSizes.FONT65,
    opacity: 0.2,
  },
  name: {
    color: appColors.chatText,
    fontFamily: appFonts.RubikMedium,
    fontSize: fontSizes.FONT21HALF,
    marginHorizontal: windowWidth(20),
  },
  row: {
    flexDirection: 'row',
    marginVertical: windowHeight(8),
  },
  blankView: {
    height: windowHeight(15),
  },
});
