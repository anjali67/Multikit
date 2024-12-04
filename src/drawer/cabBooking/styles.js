import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '../../theme/appColors';
import appFonts from '../../theme/appFonts';

export default drawerStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    height: windowHeight(60),
    width: windowWidth(90),
    resizeMode: 'contain',
    borderRadius: windowHeight(50),
  },
  mainView: {
    marginVertical: windowHeight(10),
  },
  textContainer: {
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(8),
  },
  title: {
    color: appColors.cabText,
    fontFamily: appFonts.RobotoBold,
    fontSize: fontSizes.FONT20,
  },
  content: {
    color: appColors.foodContent,
    fontFamily: appFonts.RobotoRegular,
    fontSize: fontSizes.FONT19,
    marginTop: windowHeight(3),
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: windowHeight(0),
    marginVertical: windowHeight(8),
    borderColor: appColors.cabBorder,
    borderWidth: 1,
    borderRadius: windowHeight(15),
    width: windowWidth(300),
    paddingVertical: windowHeight(10),
    paddingLeft: windowWidth(20),
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(10),
  },
  name: {
    color: appColors.cabText,
    fontFamily: appFonts.RobotoMedium,
    fontSize: fontSizes.FONT20,
    marginHorizontal: windowWidth(14),
  },
  blankView: {
    marginVertical: windowHeight(17),
  },
});
