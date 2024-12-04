import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    backgroundColor: appColors.chattingBg,
    paddingVertical: windowWidth(10),
  },
  containerView: {
    marginHorizontal: windowWidth(20),
    bottom: windowHeight(6),
  },
  profileView: {
    flex: 1,
    backgroundColor: appColors.white,
    borderTopLeftRadius: windowWidth(30),
    borderTopRightRadius: windowWidth(30),
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: windowHeight(16),
  },
  image: {
    height: windowHeight(70),
    width: windowHeight(70),
    resizeMode: 'contain',
    borderRadius: windowWidth(50),
  },
  boxView: {
    height: windowHeight(35),
    width: windowWidth(55),
    borderRadius: windowHeight(5),
    backgroundColor: appColors.chattingBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: windowWidth(15),
  },
  row: {
    flexDirection: 'row',

    marginBottom: windowHeight(14),
  },
  title: {
    color: appColors.chatText,
    fontFamily: appFonts.RubikMedium,
    fontSize: fontSizes.FONT20,
    marginTop: windowHeight(22),
    marginBottom: windowHeight(8),
  },
  name: {
    color: appColors.chatText,
    fontFamily: appFonts.RubikRegular,
    fontSize: fontSizes.FONT20,
    marginHorizontal: windowWidth(10),
  },
  titleStyle: {
    fontSize: fontSizes.FONT21,
  },
  content: {
    color: appColors.chatContent,
    fontFamily: appFonts.RubikRegular,
    fontSize: fontSizes.FONT18,
    marginBottom: windowHeight(15),
  },
  mediaView: {
    backgroundColor: appColors.mediaBg,
    paddingHorizontal: windowHeight(10),
    marginHorizontal: windowWidth(20),
    borderRadius: windowHeight(8),
    height: windowHeight(210),
    justifyContent: 'center',
    bottom: windowHeight(10),
  },
  imageStyle: {
    height: windowHeight(70),
    width: windowWidth(150),
    resizeMode: 'stretch',
    borderRadius: windowHeight(6),
    marginRight: windowWidth(12),
  },
});
