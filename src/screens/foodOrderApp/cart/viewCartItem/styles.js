import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    justifyContent: 'space-between',
    padding: windowHeight(10),
    borderRadius: windowHeight(12),
  },
  mainContainerView: {
    backgroundColor: appColors.white,
    borderRadius: windowHeight(12),
    paddingBottom: windowHeight(6),
  },
  seperator: {
    borderBottomWidth: 1.4,
    borderBottomColor: appColors.lightBorder,
    paddingBottom: windowHeight(4),
    marginHorizontal: windowWidth(20),
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    height: windowHeight(68),
    width: windowWidth(100),
    resizeMode: 'contain',
    borderRadius: windowHeight(5),
  },
  textContainer: {
    marginHorizontal: windowWidth(15),
    marginTop: windowHeight(5),
  },
  title: {
    fontSize: fontSizes.FONT21,
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoSemibold,
  },
  titleStyle: {
    fontSize: fontSizes.FONT22,
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoBold,
    marginBottom: windowHeight(11),
  },
  marginTop: {
    marginTop: windowHeight(4),
  },
  addContainer: {
    backgroundColor: appColors.foodBtn,
    paddingVertical: windowHeight(4),
    marginTop: windowHeight(45),
    paddingHorizontal: windowWidth(20),
    borderRadius: windowHeight(5),
  },
  add: {
    color: appColors.white,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT19,
    paddingLeft: windowWidth(8),
  },
  price: {
    fontSize: fontSizes.FONT19,
    color: appColors.foodContent,
    fontFamily: appFonts.LatoRegular,
    marginTop: windowHeight(2),
  },
  edit: {
    fontSize: fontSizes.FONT20,
    color: appColors.foodBtn,
    fontFamily: appFonts.LatoRegular,
    marginTop: windowHeight(6),
  },
  addItemView: {
    height: windowHeight(45),
    alignItems: 'center',
    justifyContent: 'center',
  },
  addContainer: {
    backgroundColor: appColors.foodBtn,
    paddingVertical: windowHeight(4),
    marginTop: windowHeight(45),
    paddingHorizontal: windowWidth(20),
    borderRadius: windowHeight(5),
    justifyContent: 'center',
  },
  decrement: {
    marginTop: windowHeight(8),
    left: windowWidth(4),
  },
  counterText: {
    color: appColors.white,
    fontSize: fontSizes.FONT20,
    left: windowWidth(10),
    marginHorizontal: windowWidth(6),
  },
});
