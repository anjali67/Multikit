import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';


export default styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  paddingBottom: {
    paddingBottom:windowHeight(30)
  },
});
