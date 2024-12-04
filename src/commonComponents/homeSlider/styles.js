import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(18),
    height: windowHeight(170),
  },
  mainView: {
    width: '100%',
    height: windowHeight(200),
    marginBottom: windowHeight(10),
    borderRadius: windowHeight(10),
    paddingHorizontal: windowWidth(14),
  },
  sliderView: {
    marginLeft: windowWidth(20),
    justifyContent: 'center',
    marginRight: windowWidth(70),
  },
  image: {
    width: windowWidth(430),
    height: windowHeight(160),

    borderRadius: windowHeight(10),
  },
  contentView: {
    position: 'absolute',
    alignSelf: 'center',
  },
  title: {
    fontSize: fontSizes.FONT23,
    width: windowWidth(320),
    fontFamily: appFonts.PublicSansBold,
    alignSelf: 'center',
    color: appColors.black,
  },
  subTitle: {
    fontSize: fontSizes.FONT21,
    width: windowWidth(320),
    fontFamily: appFonts.PublicSansRegular,
    alignSelf: 'center',
    color: appColors.groceryFont,
    marginTop: windowHeight(4),
  },
  content: {
    top: 0,
    left: 30,
    bottom: 0,
    right: 30,
  },
  shopNowView: {
    height: windowHeight(34),
    width: windowWidth(130),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
    marginTop: windowHeight(10),
    backgroundColor: appColors.groceryBtn,
  },
  shopNow: {
    fontSize: fontSizes.FONT20,
    color: appColors.white,
    fontFamily: appFonts.PublicSansSemiBold,
  },
});
