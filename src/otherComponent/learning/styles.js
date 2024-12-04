import appColors from '@theme/appColors';
import {windowHeight, fontSizes} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default Styles = StyleSheet.create({
  imageStyle: {
    height: '30%',
    width: '100%',
    resizeMode: 'cover',
  },
  image: {
    height: windowHeight(180),
    width: windowWidth(500),
    resizeMode: 'contain',
  },
  textView: {
    marginHorizontal: windowWidth(20),
    height: windowHeight(164),
    justifyContent: 'flex-end',
  },
  title: {
    color: appColors.white,
    fontFamily: appFonts.InterSemiBold,
    fontSize: fontSizes.FONT27,
  },
  content: {
    color: appColors.white,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT18,
    marginTop: windowHeight(6),
  },
  container: {
    position: 'absolute',
  },
  input: {
    backgroundColor: appColors.learningInput,
    paddingVertical: windowHeight(10),
    borderRadius: windowHeight(4),
    width: windowWidth(428),
    position: 'absolute',
    bottom: windowHeight(4),
    height: windowHeight(42),

    paddingLeft: windowWidth(9),
    fontFamily: appFonts.InterRegular,
    color: appColors.learningPlaceholder,
    fontSize: fontSizes.FONT18HALF,
  },
  containerView: {
    marginTop: windowHeight(9),
    justifyContent: 'center',
    marginHorizontal: windowWidth(15),
  },
  inputView: {
    height: windowHeight(38),
    width: windowWidth(432),
    backgroundColor: '#F0F2F3',
    borderRadius: windowHeight(4),
    left: windowWidth(10),
    marginTop: windowHeight(3),
  },
  margin: {
    marginTop: 13,
  },
  label: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT21,

    marginBottom: windowHeight(4),
  },
  mainView: {
    marginTop: windowHeight(6),
  },
  btn: {
    borderRadius: windowHeight(6),
    width: windowWidth(430),
    paddingVertical: windowHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: appColors.white,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT22,
    opacity: 0.9,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.InterMedium,
    color: appColors.white,
    textAlign: 'center',
    marginTop: windowHeight(8),
  },
  signInView: {
    marginTop: windowHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight(20),
    marginHorizontal: windowWidth(20),
  },
  img: {
    width: '98%',
    resizeMode: 'contain',
  },
  signIn: {
    textAlign: 'center',
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT18,
    color: appColors.learningBtn,
    position: 'absolute',
    marginHorizontal: windowWidth(20),
    padding: windowHeight(6),
    backgroundColor: appColors.white,
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F6F7',
    paddingVertical: windowHeight(11),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: windowWidth(12),
    marginHorizontal: windowWidth(7),
    borderRadius: windowHeight(4),
  },
  name: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT19,
    marginHorizontal: windowWidth(8),
  },
  socialView: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(7),
    marginTop: windowHeight(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialImg: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
  },
  userImg: {
    height: windowHeight(60),
    width: windowWidth(80),
    resizeMode: 'contain',
    marginBottom: windowHeight(6),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(50),
  },
});
