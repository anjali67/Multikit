import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  mainContainer: {
    backgroundColor: appColors.white,
    paddingHorizontal: windowHeight(13),
    borderRadius: windowHeight(15),
    paddingTop: windowHeight(17),
    paddingBottom: windowHeight(8),
  },
  title: {
    color: appColors.reviewText,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT19,
    textAlign: 'center',
  },
  cancel: {
    fontFamily: appFonts.MontserratRegular,
  },
  content: {
    color: appColors.label,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT19,
    width: windowWidth(350),
    textAlign: 'center',
    marginVertical: windowHeight(8),
  },
  horizontalLine: {
    borderTopColor: appColors.divider,
    borderTopWidth: 1,
    marginTop: windowHeight(8),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    bottom: windowHeight(7),
  },
  vertical: {
    height: '110%',
    width: 1.1,
    backgroundColor: appColors.divider,
  },
  remove: {
    fontFamily: appFonts.MontserratRegular,
    color: '#4466F2',
  },
});
