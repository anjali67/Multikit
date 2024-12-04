import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default fitnessStyles = StyleSheet.create({
  image: {
    height: windowWidth(210),
    width: windowWidth(480),
    resizeMode: 'cover',
    borderBottomLeftRadius: windowHeight(20),
    borderBottomRightRadius: windowHeight(20),
  },

  overlay: {
    position: 'absolute',
    height: windowWidth(210),
    width: windowWidth(480),
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomLeftRadius: windowHeight(20),
    borderBottomRightRadius: windowHeight(20),
  },
  row: {
    flexDirection: 'row',
    margin: windowWidth(20),
  },
  text: {
    color: appColors.white,
    marginTop: windowHeight(3),
    fontFamily: appFonts.NunitoSansSemiBold,
    fontSize: fontSizes.FONT21HALF,
    opacity: 0.9,
  },
  title: {
    color: appColors.white,
    fontFamily: appFonts.NunitoSansSemiBold,
    fontSize: fontSizes.FONT21HALF,
  },
  textView: {
    marginHorizontal: windowWidth(10),
  },
  imageView: {
    height: windowHeight(58),
    width: windowWidth(84),
    backgroundColor: appColors.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(6),
  },
  container: {
    marginHorizontal: windowWidth(20),
    marginVertical: windowHeight(17),
  },
  imageStyle: {
    height: windowHeight(50),
    width: windowWidth(70),
    resizeMode: 'contain',
  },
  containerView: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  textContainer: {
    marginHorizontal: windowWidth(20),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seperator: {
    width: '90%',
    backgroundColor: appColors.divider,
    alignSelf: 'center',
    height: 1,
  },
  blankView: {
    height: windowHeight(10),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(30),
  },
  dotView: {
    height: windowHeight(11.5),
    width: windowHeight(11.5),
    borderRadius: windowHeight(20),
    backgroundColor: '#A0A0A0',
    right: 5,
  },
  verticalLine: {
    height: windowHeight(128),
    borderColor: '#C9C9C9',
    borderWidth: 0.28,
    width: 0,
    marginTop: 10,
  },
  mainView: {
    marginHorizontal: windowWidth(30),
    marginTop: windowHeight(7),
  },
  marginTop: {
    marginTop: windowHeight(25),
  },
  mainContainerView: {
    flexDirection: 'row',
    height: windowHeight(55),
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleView: {
    height: windowHeight(40),
    width: windowHeight(40),
    borderRadius: windowHeight(20),
    backgroundColor: appColors.lightBorder,
    marginHorizontal: windowWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    marginTop: windowHeight(9),
  },
  gradiantBorder: {
    height: windowHeight(40),
    width: windowHeight(40),
    borderRadius: 100,
    padding: 1.3,
    overflow: 'hidden',
    marginHorizontal: 6,
  },
  innerCircle: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  bottomContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginHorizontal: 3,
  },
});
