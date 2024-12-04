import {fontSizes} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default Styles = StyleSheet.create({
  forgotView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

    marginHorizontal: windowWidth(35),
    marginTop: windowHeight(12),
  },
  forgotText: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.InterRegular,
    color: appColors.financeContent,
    opacity: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(10),
  },
  boxContainer: {
    borderColor: appColors.fontColor,
    borderWidth: 0.9,
    height: windowHeight(50),
    marginHorizontal: windowWidth(8),
    opacity: 1,
  },
  imageStyle: {
    height: windowHeight(33),
    width: windowWidth(33),
    resizeMode: 'contain',
  },
  marginTop: {
    marginTop: windowHeight(15),
  },
  cardView: {
    flexDirection: 'row',
    marginLeft: windowWidth(4),
  },
  inputStyle: {
    width: '45%',
    paddingHorizontal: windowWidth(20),
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.InterRegular,
    color: appColors.financeContent,
    paddingVertical: windowHeight(9),
    top: windowHeight(2),
  },
  vertical: {
    height: '129%',
    width: 1,
    backgroundColor: appColors.financeContent,
    opacity: 0.5,
    marginRight: windowWidth(20),
    top: windowHeight(-5),
  },
});
