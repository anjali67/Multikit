import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainContainer: {
    marginTop: windowHeight(20),
  },
  title: {
    fontSize: fontSizes.FONT21,
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoBold,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: appColors.white,
    padding: windowHeight(7),
    borderRadius: windowHeight(10),
    marginTop: windowHeight(9),
    alignItems: 'center',
  },
  text: {
    fontSize: fontSizes.FONT21,
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoMedium,
    marginVertical: windowHeight(6),
    marginHorizontal: windowWidth(12),
    fontWeight: '600',
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(10),
  },
  discount: {
    height: windowHeight(35),
    width: windowWidth(35),
    resizeMode: 'contain',
  },
  image: {
    height: windowHeight(28),
    width: windowWidth(28),
    resizeMode: 'contain',
    marginHorizontal: windowWidth(5),
  },
  diliveryView: {
    backgroundColor: appColors.white,
    padding: windowHeight(7),
    borderRadius: windowHeight(10),
    marginTop: windowHeight(9),
  },
  itemStyle: {
    fontFamily: appFonts.LatoRegular,
    color: appColors.foodContent,
    fontSize: fontSizes.FONT20,
    margin: windowHeight(4),
  },
});
