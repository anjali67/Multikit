import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(12),
    marginBottom: windowHeight(12),
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.bgColor,
    height: windowHeight(46),
    borderRadius: windowHeight(10),
    paddingLeft: windowWidth(20),
    marginVertical: windowHeight(7),
  },
  textInput: {
    flex: 1,
    fontFamily: appFonts.MontserratMedium,
    color: appColors.subTitle,
    fontSize: fontSizes.FONT20,
    marginLeft: windowWidth(8),
  },
  filterView: {
    height: windowHeight(36),
    width: windowWidth(56),
    backgroundColor: appColors.forgotFont,
    margin: windowHeight(11),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(5),
  },
  inputRow: {
    flexDirection: 'row',
  },
  margin: {
    marginHorizontal: windowWidth(20),
  },
});
