import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default Styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: financialStyles.mainContainer,
  },
  mainView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowHeight(20),
    marginHorizontal: windowWidth(10),
  },
  rowContainer: {
    flexDirection: 'row',
    height: windowHeight(20),
    width: windowWidth(60),
  },
  imageView: {
    flex: 3,
  },
  imageStyle: {
    height: '50%',
    width: '100%',
    resizeMode: 'contain',
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E031B',
    paddingVertical: windowHeight(8),
    borderRadius: windowHeight(20),
    flexDirection: 'row',
    paddingHorizontal: windowWidth(14),
    borderWidth: 1,
    borderColor: '#930354',
    paddingHorizontal: windowWidth(30),
  },
  qrImg: {
    height: windowHeight(20),
    width: windowWidth(21),
    resizeMode: 'contain',
    right: windowWidth(9),
  },
  textStyle: {
    color: appColors.white,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT18,
    left: windowWidth(10),
    opacity: 0.8,
  },
  crossView: {
    height: windowHeight(25),
  },
});
