import {StyleSheet} from 'react-native';
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from '../../../../theme/appConstant';
import appColors from '../../../../theme/appColors';
import appFonts from '../../../../theme/appFonts';

export default styles = StyleSheet.create({
  maincontainer: {
    marginHorizontal: windowHeight(17),
    marginVertical: windowHeight(10),
    backgroundColor: appColors.white,
    padding: windowHeight(12),
    borderRadius: windowHeight(12),
    paddingVertical: windowHeight(15),
    elevation: 0,
  },
  background: {
    backgroundColor: appColors.lightBorder,
    marginHorizontal: windowWidth(8),
    height: windowHeight(36),
    width: windowWidth(52),
    borderRadius: windowHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  boxContainer: {
    backgroundColor: appColors.foodBtn,
    paddingVertical: windowHeight(4),
    paddingHorizontal: windowWidth(25),
    borderRadius: windowHeight(4),
    marginHorizontal: windowWidth(6),
    marginTop: windowHeight(18),
  },
  title: {
    fontSize: fontSizes.FONT19,
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoSemibold,
  },
  contentStyle: {
    color: appColors.foodContent,
    fontSize: fontSizes.FONT18HALF,
    fontFamily: appFonts.LatoRegular,
    marginTop: windowHeight(2),
    lineHeight: windowHeight(18),
  },
  textView: {
    marginHorizontal: windowWidth(10),
  },
  blank: {
    height: windowHeight(12),
  },
  center: {
    flex: 1,
    bottom: windowHeight(35),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
