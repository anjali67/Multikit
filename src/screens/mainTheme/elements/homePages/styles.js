import {StyleSheet} from 'react-native';
import appColors from '../../../../theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '../../../../theme/appConstant';
import appFonts from '../../../../theme/appFonts';

export default styles = StyleSheet.create({
  header: {
    height: '28%',
    backgroundColor: appColors.green,
    position: 'absolute',
    width: '100%',
  },
  container: {
    backgroundColor: appColors.white,
    marginVertical: windowHeight(2),
    marginHorizontal: windowWidth(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(6),
    borderColor: appColors.lightGray,
    borderWidth: 1.5,
    padding: windowHeight(10),
    marginTop: windowHeight(12),
  },
  left: {
    width: '90%',
    paddingHorizontal: windowWidth(10),
  },
  letter: {
    color: appColors.lightGreen,
    fontSize: fontSizes.FONT28,
    fontFamily: appFonts.MontserratMedium,
  },
  heading: {
    color: appColors.fontColor,
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.MontserratRegular,
  },
});
