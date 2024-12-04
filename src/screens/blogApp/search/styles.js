import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  inputStyle: {
    borderRadius: windowHeight(4),
    height: windowHeight(45),
    backgroundColor: appColors.white,
    elevation: 3,
    shadowColor: '#000000',
    borderWidth: 0,
    backgroundColor: 'red',
  },
  inputText: {
    height: windowHeight(45),
    fontFamily: appFonts.MontserratRegular,
    width: windowWidth(330),
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerView: {
    marginHorizontal: 10,
    marginTop: 10,
    right: 6,
  },
  margin: {
    marginHorizontal: windowWidth(20),
  },
  title: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT19,
    marginBottom: windowHeight(10),
  },
  containerView: {
    marginTop: windowHeight(30),
  },
  tagsView: {
    backgroundColor: '#F5F9FA',
    marginVertical: windowHeight(6),
    paddingVertical: windowWidth(12),
    marginRight: windowWidth(20),
    paddingHorizontal: windowWidth(16),
    borderRadius: windowHeight(13),
  },
  name: {
    color: appColors.black,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18HALF,
  },
  inputView: {
    height: windowHeight(48),
    borderRadius: windowHeight(5),
    alignSelf: 'center',
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.MontserratRegular,
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 3,
    width: windowWidth(395),
    backgroundColor: appColors.white,
  },
  leftIcon: {
    position: 'absolute',
    left: windowWidth(20),
  },
  rightIcon: {
    position: 'absolute',
    right: windowWidth(20),
  },
  text: {
    color: appColors.primary,
    fontSize: fontSizes.FONT18,
  },
});
