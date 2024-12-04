import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  image: {
    height: windowHeight(170),
    width: windowWidth(210),
    resizeMode: 'cover',
    borderRadius: windowHeight(8),
    marginLeft: windowWidth(7),
  },
  mainContainer: {
    marginVertical: windowHeight(10),
    marginHorizontal: windowWidth(8),
  },
  circleView: {
    height: windowHeight(50),
    width: windowWidth(70),
    borderRadius: windowHeight(30),
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartView: {
    height: windowHeight(75),
    width: windowWidth(70),
    borderRadius: windowHeight(30),
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: {
    marginVertical: windowHeight(6),
  },

  circle: {
    height: windowHeight(22),
    width: windowWidth(34),
    borderRadius: windowHeight(16),
    backgroundColor: '#5E5E5E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: windowHeight(12),
    color: appColors.ecommerceFont,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.MontserratSemiBold,
    marginHorizontal: windowWidth(10),
  },
  starView: {
    flexDirection: 'row',
    marginVertical: windowHeight(7),
    marginHorizontal: windowWidth(9),
  },
  price: {
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT19,
  },
  priceText: {
    textDecorationLine: 'line-through',
    marginLeft: windowWidth(8),
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratMedium,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(10),
  },
  container: {
    marginHorizontal: windowHeight(2),
  },
});
