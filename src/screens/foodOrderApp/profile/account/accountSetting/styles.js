import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default foodOrderStyles = StyleSheet.create({
  titleStyle: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT22,
    color: appColors.foodSecondary,
    paddingBottom: windowHeight(12),
    paddingVertical: windowHeight(20),
  },
  mainView: {
    backgroundColor: appColors.white,

    borderRadius: windowHeight(8),
    paddingHorizontal: windowWidth(25),
    paddingVertical: windowHeight(15),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: windowHeight(25),
    width: windowWidth(35),
    resizeMode: 'contain',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: appFonts.LatoSemibold,
    fontSize: fontSizes.FONT20,
    color: appColors.foodSecondary,
    paddingHorizontal: windowWidth(18),
    marginTop: windowHeight(1),
  },
  padding: {
    marginTop: windowHeight(11),
  },
  border: {
    borderBottomWidth: 1.9,
    borderBottomColor: appColors.lightBorder,
    paddingBottom: windowHeight(10),
  },
});
