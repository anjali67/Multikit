import {StyleSheet} from 'react-native';
import {windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  image: {
    height: '40%',
    width: '100%',
    resizeMode: 'cover',
  },
  horizontalView: {
    marginHorizontal: windowWidth(10),
  },
  textStyle: {
    fontSize: fontSizes.FONT22,
    color: appColors.black,
    fontFamily: appFonts.PublicSansSemiBold,
    marginHorizontal: windowWidth(20),
    marginTop: windowWidth(27),
    marginBottom: windowWidth(-7),
    fontWeight: '600',
  },
  scrollView: {
    paddingBottom: windowWidth(120),
  },
  rowContainer: {
    flexDirection: 'row',
  },
});
