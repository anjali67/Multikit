import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  image: {
    height: '68%',
    width: windowWidth(480),
    resizeMode: 'stretch',
  },
  content: {
    color: appColors.cabContent,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT19,
    marginTop: windowHeight(12),
    textAlign: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(35),
  },
  title: {
    color: appColors.nftTitle,
    fontFamily: appFonts.MontserratBold,
    fontSize: fontSizes.FONT30,
  },
});
