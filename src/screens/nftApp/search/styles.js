import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
export default styles = StyleSheet.create({
  inputView: {
    backgroundColor: appColors.grayLight,
    elevation: 0,
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerView: {
    marginHorizontal: 10,
    marginTop: 10,
    right: 6,
  },
  viewContainer: {
    paddingLeft: windowWidth(3),
    paddingRight: windowWidth(0),
    marginTop: windowHeight(8),
    marginHorizontal: windowWidth(14),
    marginTop: windowHeight(17),
  },
  contentStyle: {
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT20,
    color: appColors.cabContent,
  },
  titleStyle: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT21,
    color: appColors.nftTitle,
  },
  title: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(20),
    color: appColors.nftTitle,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
  },
  margin: {
    marginHorizontal: windowWidth(20),
  },
});
