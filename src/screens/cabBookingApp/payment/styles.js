import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  title: {
    color: appColors.cabText,
    fontFamily: appFonts.RobotoMedium,
    fontSize: fontSizes.FONT20,
    marginHorizontal: windowWidth(10),
  },
  mainView: {
    margin: windowWidth(20),
  },
  main: {
    borderColor: appColors.cabBorder,
    borderRadius: windowWidth(20),
    width: '98%',
    borderWidth: 1,
    flexDirection: 'row',
    paddingVertical: windowHeight(15),
    paddingLeft: windowWidth(12),
    marginVertical: windowHeight(8),
    alignItems: 'center',
  },
  circle: {
    height: windowHeight(14),
    width: windowWidth(22),
    borderRadius: windowHeight(20),
    backgroundColor: appColors.verticalLine,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: windowWidth(15),
    marginRight: windowWidth(20),
  },
  innerCircle: {
    position: 'absolute',
    height: windowHeight(8),
    width: windowHeight(8),
    borderRadius: windowHeight(4),
    backgroundColor: 'red',
  },
  image: {
    height: windowHeight(20),
    width: windowWidth(38),
    resizeMode: 'contain',
  },
  price: {
    color: appColors.foodContent,
    fontFamily: appFonts.RobotoRegular,
    fontSize: fontSizes.FONT19,
  },
  bottomView: {
    backgroundColor: appColors.white,
    height: windowHeight(160),
    paddingVertical: windowHeight(17),
    borderTopRightRadius: windowHeight(20),
    borderTopLeftRadius: windowHeight(20),
    elevation: 7,
    borderTopColor: appColors.white,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(30),
  },
  baground: {
    height: windowHeight(40),
    width: windowWidth(60),

    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: windowHeight(30),
    width: windowWidth(60),
    resizeMode: 'contain',
  },
  textView: {
    marginHorizontal: windowWidth(18),
  },
  content: {
    color: appColors.foodContent,
    fontFamily: appFonts.RobotoRegular,
    fontSize: fontSizes.FONT18,
    marginHorizontal: windowWidth(10),
  },
  divider: {
    width: '90%',
    resizeMode: 'contain',
    marginTop: windowHeight(6),
    marginHorizontal: windowWidth(25),
    marginBottom: windowHeight(10),
  },
  leftView: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(35),
  },
  name: {
    color: appColors.cabText,
    fontFamily: appFonts.RobotoRegular,
    fontSize: fontSizes.FONT18HALF,
    marginHorizontal: windowWidth(10),
  },
  blankView: {
    height: windowHeight(10),
  },
  singleRow: {
    flexDirection: 'row',
  },
  innerView: {
    paddingHorizontal: windowWidth(10),
  },
});
