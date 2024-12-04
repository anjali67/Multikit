import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  mainStyle: {
    backgroundColor: appColors.bgColor,
    padding: windowHeight(10),
    marginTop: windowHeight(40),
    borderRadius: windowHeight(5),
  },
  scrollView: {
    paddingBottom: windowHeight(20),
  },
  btnStyle: {
    width: '90%',
    backgroundColor: appColors.groceryBtn,
    marginHorizontal: windowWidth(20),
    marginBottom: windowHeight(30),
  },
  blank: {
    height: windowHeight(50),
  },
  btn: {
    color: appColors.white,
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.PublicSansMedium,
  },
  titleStyle: {
    fontSize: fontSizes.FONT20,
  },
});
