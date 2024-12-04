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
    width: '100%',
    alignItems: 'center',
    marginTop: windowHeight(4),
  },
  tabContainer: {
    height: windowHeight(60),
    width: '100%',
    backgroundColor: appColors.gradient2,
    elevation: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: windowWidth(10),
    borderTopColor: '#151515',
    borderTopWidth: 2,
  },
  label: {
    fontSize: fontSizes.FONT17HALF,
    marginVertical: windowHeight(2),
    fontFamily: appFonts.JosefinSansRegular,
    color: appColors.financeContent,
  },
  circleView: {
    height: windowHeight(27),
    width: windowHeight(27),
    borderRadius: windowHeight(20),
    borderColor: appColors.gradient1,
    borderWidth: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 40,
    borderColor: appColors.gradient1,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: appColors.gradient1,
  },
  border: {
    position: 'absolute',
    bottom: windowHeight(32),
    borderTopColor: appColors.gradient1,
    borderTopWidth: 2,
    height: windowHeight(20),
    width: windowWidth(50),
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: windowHeight(52),
  },
  mainContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E031B',
    borderRadius: windowHeight(20),
    flexDirection: 'row',
    bottom: windowHeight(60),
    width: windowWidth(166),
    borderWidth: 1,
    borderColor: '#930354',
    paddingVertical: windowHeight(3),
  },
  qrImg: {
    height: windowHeight(25),
    width: windowWidth(20),
    resizeMode: 'contain',
  },
  textStyle: {
    color: appColors.white,
    fontSize: fontSizes.FONT17,
    bottom: windowHeight(1),
    fontFamily: appFonts.JosefinSansRegular,
  },
  imageView: {
    right: windowWidth(8),
  },
});
