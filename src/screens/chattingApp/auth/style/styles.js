import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bgImg: {
    height: windowHeight(400),
    width: '100%',
    resizeMode: 'stretch',
  },
  inputRow: {
    width: windowWidth(130),
  },
  inputView: {
    width: windowWidth(280),
  },
  inputStyle: {
    width: windowWidth(440),
    marginBottom: windowHeight(15),
  },
  inputContainer: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    marginHorizontal: windowWidth(20),
  },
  mainStyle: {
    marginHorizontal: windowWidth(0),
  },
  image: {
    height: windowWidth(31),
    width: windowWidth(53),
    resizeMode: 'contain',
  },
  circleView: {
    height: windowWidth(88),
    width: windowWidth(92),
    borderRadius: windowHeight(50),
    backgroundColor: '#E6F4EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(30),
  },
  blankView: {
    height: windowHeight(10),
  },
});
