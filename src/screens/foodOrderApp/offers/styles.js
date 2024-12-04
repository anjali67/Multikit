import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  titleStyle: {
    color: appColors.foodSecondary,
    fontSize: fontSizes.FONT22,
  },
  textView: {
    position: 'relative',
    marginHorizontal: windowWidth(0),
    width: '98%',
    marginVertical: windowWidth(0),
    marginTop: windowHeight(20),
  },
  mainContainer: {
    marginHorizontal: windowWidth(0),
  },
});
