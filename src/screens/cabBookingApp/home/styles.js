import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  image: {
    height: windowHeight(350),
    width: windowWidth(500),
    resizeMode: 'cover',
  },
  mainContainer: {
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
    marginVertical: windowWidth(30),
    marginHorizontal: windowWidth(15),
  },
  outerContainer: {
    height: windowHeight(45),
    width: windowWidth(60),
    backgroundColor: appColors.white,
    borderRadius: windowHeight(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputView: {
    height: windowHeight(45),
    marginHorizontal: windowWidth(15),
    width: '81%',
    backgroundColor: appColors.white,
    borderRadius: windowHeight(12),
    flexDirection: 'row',
    paddingHorizontal: windowWidth(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginHorizontal: windowWidth(8),
    color: appColors.cabText,
    fontFamily: appFonts.RobotoRegular,
    fontSize: fontSizes.FONT20,
  },
  textView: {
    paddingTop: windowHeight(30),
    paddingHorizontal: windowWidth(25),
    paddingBottom: windowHeight(20),
  },
  title: {
    fontFamily: appFonts.RobotoMedium,
    color: appColors.cabText,
    fontSize: fontSizes.FONT21,
    marginBottom: windowHeight(10),
  },
  containerView: {
    height: windowHeight(8),
    width: windowWidth(12),
    marginHorizontal: windowWidth(6),
  },
  containerStyle: {
    height: windowHeight(8),
    width: windowWidth(12),
    borderRadius: windowHeight(23),
  },
  inputStyle: {
    paddingLeft: windowWidth(14),
    fontFamily: appFonts.RobotoRegular,
    fontSize: fontSizes.FONT21,
  },
  inputView: {
    marginHorizontal: windowWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth(414),
    left: windowWidth(10),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: windowHeight(3),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: appFonts.RobotoMedium,
    fontSize: fontSizes.FONT18,
    color: appColors.cabText,
    marginHorizontal: windowWidth(5),
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sideImg: {
    height: windowHeight(60),
    width: windowWidth(39),
    resizeMode: 'contain',
    position: 'absolute',
    left: windowWidth(-15),
  },
});
