import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(20),
    marginVertical: windowHeight(10),
    marginTop: windowHeight(6),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: windowHeight(10),
    marginVertical: windowHeight(8),
    backgroundColor: appColors.category,
    borderRadius: windowHeight(8),
  },
  image: {
    height: windowHeight(50),
    width: windowWidth(70),
    resizeMode: 'contain',
    marginHorizontal: windowWidth(10),
  },
  priceView: {
    width: windowWidth(30),
    height: windowHeight(20),
    borderRadius: windowHeight(4),
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(20),
    right: windowWidth(8),
  },
  text: {
    fontSize: fontSizes.FONT22,
    color: appColors.black,
    fontFamily: appFonts.PublicSansRegular,
  },
  textContainer: {
    left: windowWidth(6),
  },
  title: {
    color: appColors.black,
    fontFamily: appFonts.PublicSansRegular,
    fontSize: fontSizes.FONT17,
  },
  name: {
    color: appColors.groceryFont,
    fontFamily: appFonts.PublicSansRegular,
    fontSize: fontSizes.FONT17,
  },
  price: {
    color: appColors.black,
    fontFamily: appFonts.PublicSansSemiBold,
    marginTop: windowHeight(7),
    fontSize: fontSizes.FONT17,
  },
  kg: {
    color: appColors.groceryFont,
    fontFamily: appFonts.PublicSansMedium,
    marginTop: windowHeight(5),
  },
  priceText: {
    fontSize: fontSizes.FONT20,
    color: appColors.groceryBtn,
    left: windowWidth(1),
  },
});
