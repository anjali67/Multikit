import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const hotelStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  container: {
    marginVertical: windowHeight(3),
    marginHorizontal: windowWidth(22),
  },
  inputContainer: {
    width: '103%',
    height: windowWidth(62),
    marginTop: windowHeight(10),
    paddingLeft: windowWidth(15),
    borderRadius: windowHeight(6),
    backgroundColor: appColors.reviewsBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontFamily: appFonts.MontserratRegular,
    flex: 1,
    fontSize: fontSizes.FONT20HALF,
  },
  mainView: {
    marginHorizontal: windowWidth(20),
  },
  scrollView: {
    paddingBottom: windowHeight(120),
  },
  marginTop: {
    marginTop: windowHeight(15),
  },
  bottomContainerView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: appColors.white,
    paddingHorizontal: windowWidth(20),
    width: '100%',
    elevation: 12,
  },
});
