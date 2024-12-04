import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default recentSearchStyles = StyleSheet.create({
  container: {
    marginTop: windowHeight(20),
    paddingLeft: windowWidth(10),
    paddingRight: windowWidth(16),
  },
  title: {
    fontFamily: appFonts.PublicSansSemiBold,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(5),
    left: windowWidth(10),
    color: appColors.black,
    marginBottom: windowHeight(6),
  },
  recentSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchValue: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight(9),
  },
  result: {
    fontFamily: appFonts.PublicSansMedium,
    fontSize: fontSizes.FONT20,
    color: appColors.groceryFont,
    marginHorizontal: windowWidth(10),
  },

});
