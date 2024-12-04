import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: windowHeight(10),
    borderTopColor: appColors.lightBorder,
    borderTopWidth: 1.8,
    paddingTop: windowHeight(10),
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: appColors.foodBtn,
    paddingHorizontal: windowWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(5),
    paddingVertical: windowHeight(9),
    left: windowWidth(10),
  },
  cartText: {
    marginHorizontal: windowWidth(12),
    fontFamily: appFonts.PublicSansRegular,
    fontSize: fontSizes.FONT20,
    color: appColors.white,
  },
  text: {
    fontFamily: appFonts.LatoRegular,
    fontSize: fontSizes.FONT19,
    marginVertical: windowHeight(1),
    color: appColors.foodContent,
  },
  price: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT20,
    marginVertical: windowHeight(3),
    color: appColors.black,
  },
});
