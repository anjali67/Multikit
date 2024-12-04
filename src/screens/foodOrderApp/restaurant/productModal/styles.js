import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: windowWidth(10),
    marginTop: windowHeight(3),
  },
  title: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoSemibold,
    fontSize: fontSizes.FONT22,
  },
  row: {
    flexDirection: 'row',
    paddingTop: windowHeight(5),
  },
  rating: {
    fontSize: fontSizes.FONT19,
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoMedium,
    marginHorizontal: windowWidth(7),
  },
  border: {
    borderColor: appColors.lightBorder,
    borderTopWidth: 2.1,
    marginTop: windowHeight(14),
  },
  marginTop: {
    marginTop: windowHeight(18),
  },
  content: {
    color: appColors.foodContent,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT19,
    marginTop: windowHeight(2),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemStyle: {
    color: appColors.foodContent,
    fontFamily: appFonts.LatoRegular,
    fontSize: fontSizes.FONT22,
    marginTop: windowHeight(16),
  },
  more: {
    color: appColors.foodBtn,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoMedium,
    marginRight: windowWidth(9),
    marginTop: windowHeight(9),
  },
  modelStyle: {
    borderTopStartRadius: windowWidth(30),
    borderTopEndRadius: windowWidth(30),
    borderWidth: 1,
    borderColor: appColors.foodBtn,
  },
  titleStyle:{
    fontSize:fontSizes.FONT21,
    color:appColors.white,
    fontFamily:appFonts.LatoMedium
  },
  contentTextStyle:{
    fontSize:fontSizes.FONT21,
    color:appColors.white,
    fontFamily:appFonts.LatoRegular,
    
  }
});
