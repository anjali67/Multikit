import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(15),
  },
  mainView: {
    position: 'absolute',
    height: '100%',
  },
  main: {
    height: '85%',
    alignItems: 'center',
  },
  bottomView: {
    bottom: windowHeight(20),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: windowWidth(420),
    backgroundColor: appColors.chatInput,
    paddingVertical: windowHeight(10),
    borderRadius: windowHeight(30),
    flexDirection: 'row',
    paddingHorizontal: windowWidth(65),
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(30),
  },
  circle: {
    height: windowHeight(30),
    width: windowHeight(30),
    borderRadius: windowHeight(20),
    backgroundColor: '#A72C2C',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(2),
  },
});
