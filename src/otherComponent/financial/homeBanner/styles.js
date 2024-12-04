import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  center: {
    marginLeft: windowWidth(20),
    marginTop: windowHeight(10),
  },
  image: {
    height: windowHeight(140),
    width: '96%',
    resizeMode: 'cover',
    borderRadius: windowHeight(7),
  
  },
  mainContainer: {
    position: 'absolute',
    padding: windowHeight(16),
  },
  row: {
    flexDirection: 'row',
    marginTop: windowHeight(37),
    justifyContent: 'space-between',
  },
  balance: {
    width: '72%',
  },
  addView: {
    backgroundColor: appColors.white,
    paddingVertical: windowHeight(2),
    width: '23%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
  },
  add: {
    fontFamily: appFonts.InterRegular,
    color: appColors.financeContent,
    fontSize: fontSizes.FONT21,
  },
  textStyle: {
    fontFamily: appFonts.InterRegular,
    color: appColors.white,
    fontSize: fontSizes.FONT20,
    marginTop: windowHeight(6),
  },
  text: {
    fontFamily: appFonts.InterRegular,
    color: appColors.gray,
    fontSize: fontSizes.FONT20,
  },
  top: {
    marginTop: windowHeight(3),
  },
});
