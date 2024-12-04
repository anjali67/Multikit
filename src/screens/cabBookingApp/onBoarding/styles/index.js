import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: appColors.white,
  },
  image: {
    flex: 0.7,
    width: windowWidth(450),
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  dot: {
    height: windowHeight(4.3),
    borderRadius: windowHeight(3),
    backgroundColor: appColors.onBoardGradiant2,
    marginHorizontal: windowWidth(3),
    width: '15%',
  },
  button: {
    position: 'absolute',
    padding: windowHeight(3),
    height: windowHeight(55),
    width: windowWidth(80),
    alignItems: 'center',
    justifyContent: 'center',
    right: windowWidth(9),
    borderRadius: windowHeight(50),
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: appColors.cabText,
    fontFamily: appFonts.RobotoMedium,
    fontSize: fontSizes.FONT26,
    marginBottom: windowHeight(10),
    marginTop: windowHeight(20),
  },
  content: {
    color: appColors.foodContent,
    fontFamily: appFonts.RobotoRegular,
    fontSize: fontSizes.FONT20,
    marginHorizontal: windowWidth(30),
    lineHeight: windowWidth(29),
    textAlign: 'center',
  },
  mainView: {
    bottom: 20,
  },
  mainContainer: {
    flexDirection: 'row',
    height: windowHeight(90),
    bottom: windowHeight(10),
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
