import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';

export default styles = StyleSheet.create({
  textInput: {
    width: windowWidth(200),
    marginRight: windowWidth(20),
  },
  row: {
    flexDirection: 'row',
  },
  top: {
    marginTop: windowHeight(20),
  },
});
