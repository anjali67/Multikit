import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    marginTop: windowHeight(5),
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: windowHeight(12),
    marginVertical: windowHeight(8),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: fontSizes.FONT19,
    color: appColors.black,
    fontFamily: appFonts.PublicSansMedium,
  },
  image: {
    width: windowWidth(48),
    height: windowHeight(23),
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
  },
  boxView: {
    height: windowHeight(51),
    width: windowWidth(72),
    backgroundColor: appColors.category,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
  },
  textContainer: {
    marginHorizontal: windowWidth(10),
    marginTop: windowHeight(7),
  },
  price: {
    marginRight: windowWidth(20),
    fontSize: fontSizes.FONT18,
    color: appColors.groceryBtn,
    fontFamily: appFonts.PublicSansBold,
    marginTop: windowHeight(4),
  },
  delete: {
    backgroundColor: appColors.white,
    height: windowHeight(26),
    width: windowWidth(38),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
    left: windowHeight(10),
    elevation: 1,
  },
  weight: {
    fontSize: fontSizes.FONT16,
    color: appColors.groceryFont,
    fontFamily: appFonts.PublicSansRegular,
    marginTop: windowHeight(5),
  },
});
