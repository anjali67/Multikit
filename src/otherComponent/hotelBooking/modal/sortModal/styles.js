import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(10),
    marginHorizontal: windowWidth(20),
  },
  sortView: {
    backgroundColor: appColors.reviewsBg,
    padding: windowHeight(18),
    borderTopStartRadius: windowWidth(20),
    borderTopEndRadius: windowWidth(20),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linearGradient: {
    top: windowHeight(8),
    height: windowWidth(63),
    borderRadius: windowHeight(6), // <-- Outer Border Radius
    marginBottom: windowHeight(9),
    marginVertical: windowHeight(6),
  },
  innerContainer: {
    borderRadius: windowHeight(6), // <-- Inner Border Radius
    flex: 1,
    margin: 1.5,
    justifyContent: 'center',
    backgroundColor: appColors.white,
  },
  rowView: {
    flexDirection: 'row',
    paddingHorizontal: windowWidth(14),
  },
  checkIcon: {
    bottom: windowHeight(11),
    padding: windowHeight(4),
    borderTopRightRadius: windowHeight(5),
  },
  name: {
    marginHorizontal: windowWidth(5),
    fontFamily: appFonts.MontserratRegular,
    color: appColors.label,
    fontSize: fontSizes.FONT18,
  },
  iconView: {
    marginHorizontal: windowWidth(7),
  },
  text: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT21,
  },
  btnView: {
    marginTop: windowHeight(10),
    marginBottom: windowHeight(20),
  },
  btn: {
    width: windowWidth(440),
  },
});
