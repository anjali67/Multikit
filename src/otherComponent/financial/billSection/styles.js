import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    marginTop: windowHeight(16),
  },
  contentContainerStyle: {
    paddingHorizontal: windowWidth(15),
  },
  container: {
    paddingVertical: windowHeight(12),
    borderRadius: windowHeight(11),
    marginBottom: windowHeight(16),
    paddingHorizontal: windowWidth(12),
    marginRight: windowWidth(26),
  },
  blank: {
    height: windowHeight(30),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(14),
  },
  name: {
    color: appColors.financeContent,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.InterRegular,
  },
  billNumber: {
    color: appColors.inActiveIcon,
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.InterRegular,
    marginTop: windowHeight(2),
  },
  letter: {
    color: appColors.white,
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.InterBold,
    opacity: 0.8,
  },
  image: {
    height: windowHeight(46),
    width: windowWidth(65),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(6),
  },
  textContainer: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(4),
  },
  date: {
    color: '#696969',
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.InterRegular,
    opacity: 0.8,
    marginTop: windowHeight(4),
  },
  price: {
    color: appColors.gray,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.InterRegular,
    opacity: 0.6,
    marginTop: windowHeight(10),
  },
  buttonView: {
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(14),
    borderColor: '#2629AF',
    borderWidth: 1.3,
    padding: windowHeight(3),
    marginHorizontal: windowWidth(6),
    borderRadius: windowHeight(7),
    paddingVertical: windowHeight(6),
    marginBottom: windowHeight(4),
    right: windowWidth(4),
  },
  buttonStyle: {
    color: '#2629AF',
    fontFamily: appFonts.InterSemiBold,
    fontSize: fontSizes.FONT19,
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: windowHeight(2),
    marginRight: windowWidth(10),
  },
  expired: {
    color: appColors.green1,
    left: windowWidth(6),
  },
  paidStyle: {
    backgroundColor: appColors.white,
    marginLeft: windowWidth(15),
    paddingHorizontal: windowHeight(13),
    color: appColors.financeFont,
    borderRadius: windowHeight(10),
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.InterMedium,
    marginTop: windowHeight(1),
  },
  btnText: {
    color: appColors.white,
    fontFamily: appFonts.InterSemiBold,
    fontSize: fontSizes.FONT18,
  },
  btnView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(14),
    backgroundColor: 'none',
    borderColor: appColors.white,
    borderWidth: 1,
    padding: windowHeight(3),
    marginHorizontal: windowWidth(3),
    borderRadius: windowHeight(7),
    paddingVertical: windowHeight(5),
    marginBottom: windowHeight(4),
    right: windowWidth(4),
  },
});
