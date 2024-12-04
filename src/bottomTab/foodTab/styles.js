import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainTabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.foodPrimary,
  },
  row: {
    flexDirection: 'row',
    height: windowHeight(65),
    width: '95%',
    alignItems: 'center',
  },
  tabContainer: {
    height: windowHeight(55),
    width: '96%',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: appColors.white,
    borderRadius: windowHeight(16),
    elevation: 0.8,
    marginBottom: windowHeight(15),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: windowWidth(10),
  },
  slider: {
    height: 3,
    position: 'absolute',
    top: windowHeight(4),
    backgroundColor: appColors.foodBtn,
  },
  label: {
    fontSize: fontSizes.FONT19,
    marginVertical: windowHeight(2),
    fontFamily: appFonts.LatoMedium,
    color: appColors.foodContent,
  },
  mainView: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
