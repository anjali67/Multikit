import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight(3),
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.white,
    height: windowHeight(48),
    borderRadius: windowHeight(11),
    paddingLeft: windowWidth(3),
    marginVertical: windowHeight(7),
    width: '90%',
    elevation: 3,
  },
  textInput: {
    flex: 1,
    fontFamily: appFonts.LatoMedium,
    color: appColors.foodContent,
    fontSize: fontSizes.FONT20,
    marginHorizontal: 7,
  },
});
