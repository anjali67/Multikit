import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth(440),
    backgroundColor: 'red',
    backgroundColor: appColors.white,
    marginHorizontal: windowWidth(20),
    borderRadius: windowHeight(10),
    paddingVertical: windowHeight(15),
  },
  circleView: {
    height: windowHeight(43),
    width: windowHeight(43),
    borderRadius: windowHeight(23),
    backgroundColor: appColors.chatText,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: windowWidth(32),
    marginVertical: windowHeight(15),
  },
  image: {
    height: windowHeight(30),
    width: windowWidth(30),
    resizeMode: 'contain',
  },
});
