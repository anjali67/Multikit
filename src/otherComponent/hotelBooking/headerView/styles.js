import {fontSizes} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default Styles = StyleSheet.create({
  containerView: {
    paddingVertical: windowHeight(4),
    borderBottomLeftRadius: windowHeight(18),
    borderBottomRightRadius: windowHeight(18),
  },
  textView: {
    marginTop: windowHeight(30),
    marginHorizontal: windowWidth(27),
    flexDirection: 'row',
    bottom: windowHeight(6),
  },
  title: {
    marginHorizontal: windowWidth(20),
    color: appColors.white,
    fontSize: fontSizes.FONT21HALF,
    bottom: windowHeight(2),
    fontFamily: appFonts.MontserratMedium,
    opacity: 0.9,
  },
  searchView: {
    backgroundColor: appColors.white,
    paddingVertical: windowHeight(12),
    borderBottomLeftRadius: windowHeight(14),
    borderBottomRightRadius: windowHeight(14),
    elevation: 2,
    borderWidth: 1,
    borderTopWidth: 0,
    width: '98%',
    marginHorizontal: windowWidth(2),
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(20),
  },
  textInput: {
    marginHorizontal: windowWidth(10),
    flex: 1,
    paddingVertical: windowHeight(2),
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT19,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(2),
  },
  top: {
    marginTop: windowHeight(6),
  },
  backIcon: {
    paddingHorizontal: windowHeight(6),
    justifyContent: 'flex-start',
  },
});
