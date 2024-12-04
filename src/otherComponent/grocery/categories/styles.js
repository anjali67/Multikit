import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  scrollView: {
    paddingVertical: windowHeight(4),
    marginHorizontal: windowWidth(15),
  },
  container: {
    paddingVertical: windowHeight(8),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: appColors.category,
    paddingHorizontal: windowWidth(20),
    justifyContent: 'center',
    borderRadius: windowWidth(26),
    marginHorizontal: windowWidth(5),
  },
  image: {
    width: windowWidth(45),
    height: windowHeight(25),
    resizeMode: 'contain',
  },
  title: {
    marginHorizontal: windowWidth(8),
    fontSize: fontSizes.FONT17,
    color: appColors.black,
    fontFamily: appFonts.PublicSansSemiBold,
  },
});
