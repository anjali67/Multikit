import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';

export default styles = StyleSheet.create({
  otpInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: windowHeight(12),
    width: windowWidth(71),
    height: windowHeight(49),
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginVertical: windowHeight(6),
    marginBottom: windowHeight(15),

  },
});
