import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '../../theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  myStarStyle: {
    color: appColors.rating,
    backgroundColor: 'transparent',
  },
  myEmptyStarStyle: {
    color: appColors.gray,
    backgroundColor: 'transparent',
  },
});
