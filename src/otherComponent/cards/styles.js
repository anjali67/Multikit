import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  center: {
    marginLeft: windowWidth(20),
    marginVertical: windowHeight(12),
  },
  image: {
    height: windowHeight(140),
    width: '96%',
    resizeMode: 'cover',
    borderRadius: windowHeight(7),
  },
  visaImg: {
    height: windowHeight(32),
    width: windowWidth(50),
    resizeMode: 'contain',
    marginRight: windowWidth(7),
  },
  mainContainer: {
    position: 'absolute',
    padding: windowHeight(16),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '86%',
  },
  balance: {
  },
  addView: {
    backgroundColor: appColors.white,
    paddingVertical: windowHeight(4),
    paddingHorizontal: windowWidth(14),
    borderRadius: windowHeight(4),
    bottom: windowHeight(10),
  },
  add: {
    fontFamily: appFonts.InterMedium,
    color: appColors.blackColor,
    fontSize: fontSizes.FONT17,
  },
  textStyle: {
    fontFamily: appFonts.InterRegular,
    color: appColors.white,
    fontSize: fontSizes.FONT20,
  },
  text: {
    fontFamily: appFonts.InterRegular,
    color: appColors.white,
    fontSize: fontSizes.FONT20,
    opacity: 0.9,
  },
  top: {
    marginTop: windowHeight(3),
    fontSize: fontSizes.FONT17,
    opacity: 0.8,
  },
  cardName: {
    fontFamily: appFonts.InterRegular,
    color: appColors.gray,
    fontSize: fontSizes.FONT17,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '84%',
  },
});
