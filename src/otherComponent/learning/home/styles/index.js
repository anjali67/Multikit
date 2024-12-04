import appColors from '@theme/appColors';
import {windowHeight, fontSizes} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default Styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80.3%',
  },
  singleRow: {
    flexDirection: 'row',
  },
  image: {
    height: windowHeight(60),
    width: windowWidth(110),
    resizeMode: 'contain',
    left: windowWidth(14),
  },
  margin: {
    marginHorizontal: windowWidth(15),
  },
  handImg: {
    height: windowHeight(22),
    width: windowWidth(22),
    resizeMode: 'contain',
    marginHorizontal: windowWidth(8),
    marginTop: windowHeight(7),
  },
  title: {
    color: appColors.white,
    marginTop: windowHeight(4),
    fontSize: fontSizes.FONT25,
    fontFamily: appFonts.InterBold,
    opacity: 0.9,
  },
  content: {
    color: appColors.white,
    fontSize: fontSizes.FONT18HALF,
    fontFamily: appFonts.InterRegular,
    opacity: 0.9,
    marginTop: windowHeight(2),
  },
  sectionStyle: {
    flexDirection: 'row',
    backgroundColor: appColors.bgColor,
    height: windowHeight(38),
    borderRadius: windowHeight(20),
    paddingLeft: windowWidth(10),
    marginVertical: windowHeight(7),
    width: windowWidth(442),
    marginTop: windowHeight(20),
  },
  textInput: {
    fontFamily: appFonts.InterRegular,
    color: appColors.subTitle,
    fontSize: fontSizes.FONT20,
    width: windowWidth(348),
    right: windowWidth(8),
    bottom: windowHeight(1),
  },
  text: {
    fontSize: fontSizes.FONT18HALF,
    color: appColors.white,
    fontFamily: appFonts.InterRegular,
    bottom: windowHeight(6),
    alignSelf: 'center',
    marginTop: windowHeight(14),
    marginLeft: windowWidth(6),
  },
  textStyle: {
    color: appColors.learningBtn,
    width: windowWidth(320),
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.InterRegular,
    marginHorizontal: windowWidth(15),
    marginTop: windowHeight(2),
  },
  mainContainer: {
    marginRight: windowWidth(20),
    paddingHorizontal: windowWidth(30),
    marginBottom: windowHeight(8),
    borderRadius: windowHeight(20),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: windowHeight(0),
  },

  categoryImg: {
    height: windowHeight(34),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: appColors.white,
    elevation: 0.9,
    paddingHorizontal: windowWidth(30),
    marginRight: windowWidth(19),
    marginBottom: windowHeight(11),
    borderRadius: windowHeight(20),
    paddingVertical: windowHeight(1),
  },
  imageStyle: {
    height: windowHeight(50),
    width: windowWidth(75),
    resizeMode: 'contain',
  },
  containerStyle: {
    width: windowWidth(390),
    marginHorizontal: windowWidth(0),
    right: windowWidth(28),
    marginTop: windowHeight(12),
  },

  inputView: {
    width: '94%',
    height: windowHeight(46),
    backgroundColor: 'red',
    position: 'absolute',
    top: 10,
    alignSelf: 'flex-end',
    borderRadius: windowHeight(4),
  },
  input: {
    width: '98%',
    height: windowHeight(49),
    backgroundColor: 'blue',
    marginBottom: 10,
    borderRadius: windowHeight(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  courseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  categoryContainer: {
    width: '90%',
    height: windowHeight(110),
    backgroundColor: '#eff1f3',
    position: 'absolute',
    top: 12,
    right: windowWidth(35),
    borderRadius: windowHeight(10),
  },
  outerContainer: {
    width: '90%',
    height: windowHeight(110),
    backgroundColor: appColors.white,
    marginBottom: 10,
    borderRadius: windowHeight(4),
    justifyContent: 'space-between',
    elevation: 2,
    top: windowHeight(2),

    borderTopColor: '#eff1f3',
    borderTopWidth: 0.6,
    borderLeftWidth: 0.6,
    borderLeftColor: '#eff1f3',
  },
  marginRight: {
    marginRight: windowWidth(-6),
  },
  featuredContainer: {
    backgroundColor: appColors.category,
    width: windowWidth(207),
    borderRadius: windowHeight(7),
    paddingBottom: windowHeight(3),
    paddingHorizontal: 5,
    marginRight: 12,
  },
  featuredImg: {
    height: windowHeight(80),
    width: windowWidth(180),
    borderRadius: windowHeight(7),
    resizeMode: 'cover',
    right: windowWidth(3),
  },
  ratingComtainer: {
    flexDirection: 'row',
    width: '98%',
    marginTop: windowHeight(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rate: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT19,
    marginHorizontal: windowWidth(7),
  },
  price: {
    fontFamily: appFonts.InterSemiBold,
    fontSize: fontSizes.FONT19HALF,
    color: appColors.learningBtn,
  },
  marginTop: {
    marginTop: windowHeight(0),
  },
  titleStyle: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT21,
    bottom: windowHeight(16),
  },
  marginBottom: {
    marginBottom: windowHeight(16),
  },
});
