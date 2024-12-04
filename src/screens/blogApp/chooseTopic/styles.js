import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import {fontSizes, windowWidth} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  title: {
    fontFamily: appFonts.RobotoBold,
    color: appColors.fontColor,
    fontSize: fontSizes.FONT32,

    width: windowWidth(200),
  },
  mainContainer: {
    backgroundColor: appColors.chooseTopic,
    paddingHorizontal: windowHeight(20),
    marginVertical: windowHeight(7),
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth(205),
    borderRadius: windowHeight(15),
    paddingVertical: windowHeight(14),
    marginHorizontal: windowWidth(10),
  },
  name: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratMedium,
    marginTop: windowHeight(6),
  },
  buttonView: {
    borderRadius: windowHeight(15),
    marginTop: windowHeight(20),
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: windowHeight(10),
    marginTop: windowHeight(30),
  },
  textView: {
    marginHorizontal: windowHeight(20),
    marginVertical: windowHeight(25),
    width: '87%',
  },
});
