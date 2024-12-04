import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  image: {
    height: '35%',
    width: '80%',
  },
  blank: {
    height: windowHeight(20),
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: fontSizes.FONT25,
    color: appColors.black,
    fontFamily: appFonts.PublicSansSemiBold,
    marginTop: windowHeight(-2),
  },
  content: {
    fontSize: fontSizes.FONT19,
    color: appColors.groceryFont,
    fontFamily: appFonts.PublicSansMedium,
    marginTop: windowHeight(8),
    marginHorizontal: windowHeight(20),
    textAlign: 'center',
    lineHeight: windowHeight(20),
  },
  btnStyle: {
    width: '48%',
    backgroundColor: appColors.groceryBtn,
    marginHorizontal: windowWidth(20),
    marginBottom: windowHeight(10),
    marginTop: windowHeight(23),
    borderRadius: windowHeight(5),
  },
  btn: {
    color: appColors.white,
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.PublicSansMedium,
  },
});
