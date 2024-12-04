import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainView: {
    height: '10%',
    backgroundColor: appColors.authBg,
  },
  innerContainer: {
    backgroundColor: appColors.lightblue,
    height: windowHeight(30),
    borderTopRightRadius: windowHeight(20),
    bottom: '3%',
    borderTopLeftRadius: windowHeight(20),
  },
  mainContainer: {
    backgroundColor: appColors.white,
    height: '100%',
    bottom: '5%',
    borderTopLeftRadius: windowHeight(25),
    borderTopRightRadius: windowHeight(25),
  },
});
