import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default detailsViewStyles = StyleSheet.create({
  container: {
    marginTop: windowHeight(8),
  },
  txt: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.PublicSansMedium,
    color: appColors.black,
  },
  detail: {
    fontSize: fontSizes.FONT20,
  },
  title: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.PublicSansRegular,
    color: appColors.groceryFont,
    marginTop: windowHeight(9),
    lineHeight: windowHeight(18),
  },
  manufacturer: {
    paddingVertical: windowHeight(8),
    marginHorizontal: windowWidth(20),
  },
  optionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  product: {
    marginTop: windowHeight(14),
    marginHorizontal: windowWidth(20),
    paddingBottom: windowHeight(10),
  },
});
