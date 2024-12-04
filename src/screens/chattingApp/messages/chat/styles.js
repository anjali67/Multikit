import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default chattingStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  mainView: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: windowHeight(20),
    borderTopRightRadius: windowHeight(20),
    backgroundColor: appColors.white,
  },
  contentStyle: {
    fontSize: fontSizes.FONT14HALF,
    bottom: windowHeight(2),
  },
  mainChat: {
    marginHorizontal: windowHeight(10),
    marginTop: windowHeight(20),
  },
  image: {
    height: '100%',
    width: '100%',
    opacity: 0.03,
    backgroundColor: appColors.white,
  },
  emojiImg: {
    height: windowHeight(32),
    width: windowWidth(32),
    resizeMode: 'contain',
  },
  innerView: {
    position: 'absolute',
  },
  chatView: {
    height: windowHeight(530),
  },
  bottomView: {
    bottom: windowHeight(15),
  },
  inputBg: {
    backgroundColor: appColors.chatInput,
    width: windowWidth(440),
    borderRadius: windowHeight(20),
    flexDirection: 'row',
    height: windowHeight(45),
    paddingHorizontal: windowWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    flex: 1,
    color: appColors.chatText,
    fontFamily: appFonts.RubikRegular,
    fontSize: fontSizes.FONT18,
    marginHorizontal: windowHeight(6),
    marginTop: windowHeight(2),
  },
  circleView: {
    height: windowHeight(33),
    width: windowHeight(33),
    backgroundColor: appColors.chatText,
    borderRadius: windowHeight(20),
    alignItems: 'center',
    justifyContent: 'center',
    left: windowWidth(10),
  },
  imageStyle: {
    height: windowHeight(115),
    width: windowWidth(330),
    resizeMode: 'stretch',
  },
  playcircle: {
    height: windowHeight(20),
    width: windowWidth(30),
    backgroundColor: appColors.chatText,
    borderRadius: windowHeight(20),
    marginHorizontal: windowWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  audioView: {
    backgroundColor: appColors.chatInput,
    width: windowWidth(320),
    height: windowHeight(45),
    alignItems: 'center',

    borderRadius: windowHeight(12),
    borderBottomLeftRadius: 0,
    flexDirection: 'row',
    paddingHorizontal: windowWidth(10),
  },
  imageAudio: {
    height: windowHeight(50),
    width: windowWidth(180),
    resizeMode: 'contain',
  },
  myMessageContainer: {
    backgroundColor: appColors.financeFont,
    borderRadius: windowHeight(8),
    paddingHorizontal: windowHeight(10),
    maxWidth: '90%',
    justifyContent: 'space-between',
    paddingVertical: windowHeight(8),
  },
  audioContainer: {
    maxWidth: '100%',
    paddingVertical: windowHeight(6),
    width: windowWidth(300),
  },
  timeView: {
    maxWidth: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: windowHeight(6),
    marginTop: windowHeight(2),
  },
  time: {
    color: appColors.chatText,
    fontFamily: appFonts.RubikRegular,
    fontSize: fontSizes.FONT13,
    marginHorizontal: windowWidth(10),
    marginTop: windowHeight(0),
  },
  msgTime: {
    color: appColors.chatText,
    fontFamily: appFonts.RubikRegular,
    fontSize: fontSizes.FONT15,
  },
  textStyle: {
    color: appColors.chatText,
    fontFamily: appFonts.RubikRegular,
    fontSize: fontSizes.FONT18,
  },
  fontsize: {
    fontSize: fontSizes.FONT19,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  audioCircle: {
    height: windowHeight(25),
    width: windowHeight(25),
    backgroundColor: appColors.white,
    borderRadius: windowHeight(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: windowWidth(10),
  },
  audioText: {
    opacity: 0.6,
  },
  textContainer: {
    marginHorizontal: windowWidth(8),
  },
  modalContainer: {
    bottom: windowHeight(12),
    position: 'absolute',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
