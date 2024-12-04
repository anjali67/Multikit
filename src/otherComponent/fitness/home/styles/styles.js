import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {windowWidth} from '@theme/appConstant';

export default style = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  margin: {
    marginHorizontal: windowWidth(20),
  },
  imageStyle: {
    height: windowHeight(95),
    width: windowWidth(210),
    resizeMode: 'stretch',
    borderRadius: windowHeight(10),
  },
  containerView: {
    marginRight: windowWidth(10),
    marginBottom: windowHeight(13),
    marginTop: windowHeight(6),
    marginLeft:windowWidth(4)
  },
  name: {
    color: appColors.fontColor,
    fontFamily: appFonts.NunitoSansRegular,
    fontSize: fontSizes.FONT18,
  },
  image: {
    height: windowHeight(72),
    width: windowWidth(145),
    resizeMode: 'cover',
    borderRadius: windowHeight(7),
  },
  textView: {
    marginHorizontal: windowWidth(20),
  },
  rowStyle: {
    marginHorizontal: windowWidth(4),
  },
  time: {
    color: appColors.cabContent,
    fontFamily: appFonts.NunitoSansRegular,
    marginHorizontal: windowWidth(2),
  },
  calories: {
    marginHorizontal: windowWidth(4),
    color: appColors.cabContent,
    fontFamily: appFonts.NunitoSansRegular,
    fontSize: fontSizes.FONT19HALF,
  },
  rowContainer: {
    backgroundColor: appColors.white,
    paddingVertical: windowHeight(10),
    paddingHorizontal: windowWidth(12),
    borderRadius: windowHeight(7),
    marginBottom: windowHeight(12),
    elevation: 2,
    alignItems: 'center',
    marginHorizontal: windowWidth(12),
    width: windowWidth(435),
  },
  crownImg: {
    height: windowHeight(25),
    width: windowWidth(25),
    resizeMode: 'contain',
    marginTop: windowHeight(2),
  },
  gradient: {
    height: windowHeight(90),
    width: windowWidth(280),
    marginTop: windowHeight(16),
    borderRadius: windowHeight(7),
  },
  potentialImg: {
    height: windowHeight(90),
    width: windowWidth(140),
    resizeMode: 'cover',
  
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerStyle: {
    marginVertical: windowHeight(10),
    marginLeft: windowWidth(20),
  },
  nameStyle: {
    color: appColors.white,
    fontFamily: appFonts.NunitoSansRegular,
    fontSize: fontSizes.FONT24,
  },
  marginBottom: {
    marginBottom: windowHeight(40),
  },
  calenderView: {
    height: windowHeight(39),
    width: windowWidth(57),
    backgroundColor: appColors.white,
    borderRadius: windowHeight(6),

    marginHorizontal: windowWidth(10),
    marginTop: windowHeight(15),
    alignItems: 'center',
    elevation: 1,
    justifyContent: 'center',
    marginBottom: windowHeight(5),
  },
  dot: {
    height: windowHeight(5),
    width: windowWidth(7),
    borderRadius: windowHeight(10),
    left: windowWidth(17),
    bottom: windowHeight(2),
  },
});
