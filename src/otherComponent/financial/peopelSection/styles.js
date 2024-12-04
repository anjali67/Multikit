import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(6),
    marginRight: windowWidth(26),
  },
  flatlist: {
    marginVertical: windowWidth(20),
  },
  image: {
    height: windowHeight(53),
    width: windowWidth(80),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(30),
  },
  name: {
    color: appColors.gray,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.InterRegular,
    marginTop: windowHeight(9),
    textAlign: 'center',
    opacity: 0.8,
  },
  contentContainerStyle: {
    paddingHorizontal: windowWidth(10),
  },
});
