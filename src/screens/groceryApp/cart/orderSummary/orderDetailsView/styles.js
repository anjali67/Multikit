import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  orderDetailView: {
    width: '92%',
    alignSelf: 'center',
    backgroundColor: appColors.groceryBtn,
    borderRadius: windowHeight(10),
    alignItems: 'center',
    paddingHorizontal: windowWidth(10),
    marginTop: windowHeight(10),
    paddingVertical: windowHeight(14),
    paddingHorizontal: windowWidth(25),
    flexDirection: 'row',
  },
  idView: {
    marginLeft: windowWidth(17),
  },
  id: {
    fontSize: fontSizes.FONT18,
    color: appColors.lightWhite,
    fontFamily: appFonts.PublicSansRegular,
  },
  orderDeliver: {
    fontSize: fontSizes.FONT24,
    color: appColors.white,
    fontFamily: appFonts.PublicSansMedium,
    marginTop: windowHeight(2),
  },
});
