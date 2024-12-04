import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  main: {
    marginLeft: windowWidth(20),
  },
  mainContainer: {
    marginRight: windowWidth(24),
    marginTop: windowHeight(15),
  },
  iconView: {
    backgroundColor: appColors.reviewsBg,
    paddingVertical: windowHeight(10.6),
    borderRadius: windowHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth(62),
  },
  name: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratRegular,
    marginTop: windowHeight(11),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
