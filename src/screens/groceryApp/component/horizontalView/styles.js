import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    paddingLeft: windowWidth(10),
    marginTop: windowHeight(14),
  },
  lowestPriceView: {
    width: windowWidth(177),
    borderRadius: windowHeight(6),
    marginHorizontal: windowWidth(10),
    backgroundColor: appColors.category,
    paddingVertical: windowHeight(5),
  },
  image: {
    width: windowWidth(90),
    height: windowHeight(60),
    alignSelf: 'center',
    marginTop: windowHeight(5),
  },
  textContainer: {
    marginHorizontal: windowWidth(16),
    marginTop: windowHeight(5),
  },
  name: {
    width: '100%',
    color: appColors.black,
    fontFamily: appFonts.PublicSansRegular,
    fontSize: fontSizes.FONT16,
  },
  gram: {
    color: appColors.groceryFont,
    fontFamily: appFonts.PublicSansRegular,
    fontSize: fontSizes.FONT16,
    marginTop: windowHeight(6),
    width: windowWidth(150),
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: windowHeight(3.9),
  },
  price: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.PublicSansSemiBold,
    color: appColors.black,
  },
  increase: {
    width: windowWidth(32),
    height: windowHeight(21.6),
    borderRadius: windowHeight(4),
    backgroundColor: appColors.groceryBtn,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(20),
  },
  wishList: {
    position: 'absolute',
    right: windowWidth(16),
    top: windowHeight(10),
  },
});
