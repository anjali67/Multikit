import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  margin: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(20),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdown: {
    backgroundColor: appColors.lightBorder,
    flexDirection: 'row',
    paddingVertical: windowHeight(8),

    justifyContent: 'space-around',
    alignItems: 'center',
    width: windowWidth(110),
    borderRadius: windowHeight(4),
  },
  date: {
    color: appColors.cabContent,
    fontFamily: appFonts.NunitoSansSemiBold,
    fontSize: fontSizes.FONT18,
  },
  title: {
    color: appColors.fontColor,
    fontFamily: appFonts.NunitoSansBold,
    fontSize: fontSizes.FONT22,
  },
  name: {
    color: appColors.fontColor,
    fontFamily: appFonts.NunitoSansSemiBold,
    fontSize: fontSizes.FONT18HALF,
  },
  image: {
    height: windowHeight(130),
    width: '100%',
    resizeMode: 'contain',
    marginTop: windowHeight(8),
  },
  divider: {
    height: windowHeight(25),
    borderBottomWidth: 1.6,
    borderBottomColor: appColors.bgColor,
    marginHorizontal: 0,
  },
  reportingSection: {
    backgroundColor: appColors.lightBorder,
    width: windowWidth(208),
    paddingVertical: windowHeight(8),
    paddingHorizontal: windowWidth(14),
    borderRadius: windowHeight(8),
    marginHorizontal: 9,
    paddingBottom: windowHeight(10),
  },
  imageView: {
    height: windowHeight(35),
    width: windowWidth(52),
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(6),
  },
  imageStyle: {
    height: windowHeight(23),
    width: windowWidth(45),
    resizeMode: 'contain',
  },
  singleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  background: {
    width: '98%',
    backgroundColor: appColors.lightBorder,
    marginHorizontal: 6,
    borderRadius: windowHeight(8),
    paddingHorizontal: windowWidth(20),
    paddingTop: windowHeight(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  graphImg: {
    height: windowHeight(80),
    width: windowWidth(215),
    resizeMode: 'contain',
  },
});
