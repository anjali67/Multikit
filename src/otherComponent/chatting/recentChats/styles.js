import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '../../../theme/appFonts';
import {windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  title: {
    color: appColors.chatText,
    fontFamily: appFonts.RubikMedium,
    fontSize: fontSizes.FONT21HALF,
  },
  header: {
    marginTop: windowHeight(12),
    marginBottom: windowHeight(15),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleView: {
    height: windowHeight(20),
    width: windowHeight(20),
    borderRadius: windowHeight(20),
    backgroundColor: appColors.chatText,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    fontFamily: appFonts.RubikLight,
    fontSize: fontSizes.FONT24,
    color: appColors.white,
    bottom: 3,
  },
  image: {
    height: windowHeight(46),
    width: windowHeight(46),
    resizeMode: 'contain',
    borderRadius: windowHeight(23),
    borderColor: appColors.chatText,
  },
  mainView: {
    position: 'absolute',
    bottom: 0,
    width: windowWidth(70),
    height: windowHeight(25),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: windowHeight(10),
    left: windowWidth(2),
    bottom: windowHeight(10),
  },
  innerContainer: {
    height: windowHeight(8),
    width: windowHeight(8),
    borderRadius: windowHeight(30),
    backgroundColor: '#CDE9DD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  horizontalLine: {
    borderTopColor: appColors.divider,
    borderTopWidth: 1.2,
    marginTop: windowHeight(8),
    marginBottom: windowHeight(10),
  },
  textContainer: {
    marginVertical: windowHeight(1),
    marginHorizontal: windowWidth(15),
  },
  name: {
    color: appColors.chatText,
    fontFamily: appFonts.RubikMedium,
    fontSize: fontSizes.FONT20,
  },
  content: {
    color: appColors.chatContent,
    fontFamily: appFonts.RubikRegular,
    fontSize: fontSizes.FONT16HALF,
    width: windowWidth(240),
  },
  time: {
    color: appColors.chatContent,
    fontFamily: appFonts.RubikRegular,
    fontSize: fontSizes.FONT17,
  },
  container: {
    alignItems: 'flex-end',
    marginHorizontal: windowHeight(3),
  },
  containerView: {
    height: windowHeight(17),
    width: windowHeight(17),
    borderRadius: windowHeight(8.5),
    backgroundColor: '#CDE9DD',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: appFonts.RubikMedium,
    fontSize: fontSizes.FONT15,
    color: appColors.chatText,
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(15),
  },
});
