import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainTabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.white,
  },
  row: {
    flexDirection: 'row',
    height: windowHeight(65),
    width: '100%',
    alignItems: 'center',
  },
  tabContainer: {
    height: windowHeight(55),
    width: '100%',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: appColors.white,
    elevation: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: windowWidth(10),
    borderTopColor: appColors.divider,
    borderTopWidth: 1.4,
  },
  label: {
    fontSize: fontSizes.FONT14,
    marginVertical: windowHeight(2),
    fontFamily: appFonts.MontserratMedium,
    color: appColors.reviewText,
    marginBottom: windowHeight(10),
  },
  mainView: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: windowHeight(16),
    width: windowWidth(16),
    resizeMode: 'contain',
    top: windowHeight(14),
    right: windowHeight(2),
  },
});
