import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '34%',
    backgroundColor: appColors.green,
    position: 'absolute',
    width: '100%',
  },
  mainView: {
    paddingBottom: windowHeight(55),
  },
  headerView: {
    backgroundColor: appColors.green,
    height: '14%',
  },
  container: {
    backgroundColor: appColors.white,
    marginVertical: windowHeight(2),
    marginHorizontal: windowWidth(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(6),
    borderColor: appColors.lightGray,
    borderWidth: 1.5,
    padding: windowHeight(20),
    marginTop: windowHeight(12),
  },
  left: {
    width: '80%',
    paddingHorizontal: windowWidth(20),
  },
  heading: {
    color: appColors.fontColor,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.MontserratMedium,
  },
  subTitle: {
    top: windowHeight(7),
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT17,
  },
  imageStyle: {
    height: windowHeight(50),
    width: windowWidth(50),
    resizeMode: 'contain',
  },
  letter: {
    color: appColors.letter,
    fontWeight: '900',
    fontSize: fontSizes.FONT50,
    fontFamily: appFonts.MontserratBold,
  },
  contentContainerStyle:{
    paddingBottom:windowHeight(64)
  }
});
