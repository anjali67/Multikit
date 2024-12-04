import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: windowHeight(8),
    alignItems: 'center',
  },
  radio: {
    height: windowHeight(15),
    width: windowHeight(15),
    borderRadius: windowHeight(10),
    backgroundColor: appColors.verticalLine,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerRadio: {
    height: windowHeight(7),
    width: windowHeight(7),
    backgroundColor: '#4466F2',
    borderRadius: windowHeight(10),
    position: 'absolute',
  },
  containerStyle: {
    marginTop: windowHeight(22),
    marginVertical: 0,
  },
  margin: {
    marginHorizontal: windowWidth(22),
    marginTop: windowHeight(10),
  },
  name: {
    color: appColors.fontColor,
    fontFamily: appFonts.NunitoSansSemiBold,
    marginHorizontal: windowWidth(19),
    fontSize: fontSizes.FONT20,
  },
  container: {
    marginTop: windowHeight(15),
    marginVertical: 0,
    marginHorizontal: 0,
  },
  title: {
    color: appColors.fontColor,
    fontFamily: appFonts.NunitoSansBold,
    fontSize: fontSizes.FONT21HALF,
    marginTop: windowHeight(19),
    marginBottom: windowHeight(5),
  },
});
