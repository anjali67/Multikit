import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export default cartStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  titleStyle: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT21HALF,
    marginBottom: windowHeight(4),
  },
  main: {
    marginVertical: windowHeight(20),
    marginHorizontal: windowWidth(20),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '99%',
    backgroundColor: '#F5F6F7',
    marginTop: windowHeight(9),
    padding: windowHeight(10),
    borderRadius: windowHeight(4),
    marginBottom: windowHeight(7),
  },
  rowView: {
    flexDirection: 'row',
  },
  centerView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  imageStyle: {
    height: windowHeight(65),
    width: windowWidth(130),
    resizeMode: 'cover',
    borderRadius: windowHeight(4),
  },
  title: {
    width: windowWidth(250),
    fontFamily: appFonts.InterRegular,
    color: appColors.learningBtn,
    fontSize: fontSizes.FONT16,
  },
  crossIconView: {
    backgroundColor: appColors.white,
    height: windowHeight(16),
    width: windowWidth(23),
    right: windowWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    borderRadius: windowHeight(3),
    bottom: windowHeight(3),
  },
  price: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT18,
    marginHorizontal: windowWidth(4),
    marginTop: windowHeight(4),
  },
  divider: {
    height: windowHeight(7),
    backgroundColor: '#F0F2F3',
  },
  containerStyle: {
    marginTop: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    bottom: windowHeight(8),
  },
  inputStyle: {
    marginTop: 0,
    fontSize: fontSizes.FONT19,
  },
  blankView: {
    height: windowHeight(15),
  },
  paddingBottom: {
    paddingBottom: windowHeight(60),
  },
  mainStyle: {
    marginTop: windowHeight(26),
    backgroundColor: appColors.white,
  },
  verticalLine: {
    height: windowHeight(30),
    borderColor: '#9DACB1',
    borderWidth: 0.3,
    width: 0,
    marginTop: 10,
    marginHorizontal: windowWidth(30),
    marginVertical: 10,
    opacity: 0.6,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 23,
  },
  titleText: {
    color: appColors.white,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT20,
  },

  buttonStyle: {
    width: '100%',
    borderRadius: windowHeight(5),
    height: windowHeight(42),
    backgroundColor: '#EBEEEF',
    borderRadius: windowHeight(6),
    marginTop: windowHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    color: appColors.learningBtn,
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.InterMedium,
    opacity: 0.8,
  },
  image: {
    height: windowHeight(23),
    width: windowWidth(38),
    resizeMode: 'contain',
  },
  imageView: {
    height: windowHeight(34),
    width: windowWidth(59),
    borderRadius: windowHeight(4),
    elevation: 1,
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: windowWidth(20),
  },
  marginBottom: {
    marginBottom: windowHeight(10),
  },
  circle: {
    height: windowHeight(18),
    width: windowWidth(29),
    borderRadius: windowHeight(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: windowWidth(15),
    marginRight: windowWidth(20),
    borderColor: appColors.divider,
    borderWidth: 1.5,
  },
  innerCircle: {
    position: 'absolute',
    height: windowHeight(7),
    width: windowHeight(7),
    borderRadius: windowHeight(4),
    backgroundColor: appColors.learningBtn,
  },
});
