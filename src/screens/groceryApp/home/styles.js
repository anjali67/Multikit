import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  inputStyle: {
    borderRadius: windowHeight(28),
    height: windowHeight(45),
    backgroundColor: appColors.white,
    elevation: 3,
    shadowColor: '#000000',
    borderWidth: 0,
  },
  inputText: {
    height: windowHeight(45),
  },
  title: {
    marginHorizontal: windowHeight(20),
    marginTop: windowHeight(15),
    marginBottom: windowHeight(7),
    fontSize: fontSizes.FONT19,
    color: appColors.black,
    fontFamily: appFonts.PublicSansSemiBold,
  },
  textStyle: {
    fontSize: fontSizes.FONT20,
    color: appColors.black,
    fontFamily: appFonts.PublicSansBold,
  },
  seeAllStyle: {
    color: appColors.groceryBtn,
    fontFamily: appFonts.PublicSansMedium,
    fontSize: fontSizes.FONT18,
  },
  benner: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(23),
  },
  bannerImg: {
    height: windowHeight(76),
    width: windowWidth(437),
    borderRadius: windowHeight(5),
    resizeMode: 'stretch',
  },
});
