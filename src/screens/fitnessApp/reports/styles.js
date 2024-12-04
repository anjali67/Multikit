import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(30),
    marginTop: windowWidth(37),
  },
  calenderView: {
    marginTop: windowWidth(19),
  },
  title: {
    color: appColors.fontColor,
    fontFamily: appFonts.NunitoSansBold,
    fontSize: fontSizes.FONT22,
  },
  content: {
    color: '#4466F2',
    fontFamily: appFonts.NunitoSansRegular,
    fontSize: fontSizes.FONT21,
  },
  divider: {
    height: windowHeight(25),
    borderBottomWidth: 1.6,
    borderBottomColor: appColors.bgColor,
    marginHorizontal: 18,
    bottom: windowHeight(3),
  },
});
