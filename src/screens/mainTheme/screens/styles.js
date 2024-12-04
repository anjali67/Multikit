import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default externalStyles = StyleSheet.create({
  header: {
    height: '31%',
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
    borderRadius: windowHeight(6),
    borderColor: appColors.lightGray,
    borderWidth: 1.5,
    padding: windowHeight(12),
    marginTop: windowHeight(12),
  },
  left: {
    paddingHorizontal: windowWidth(10),

  },
  letter: {
    color: appColors.lightGreen1,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18,
  },
  heading: {
    color: appColors.fontColor,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.MontserratRegular,
  },
  contentContainerStyle:{
    paddingBottom:windowHeight(70)

  }
});
