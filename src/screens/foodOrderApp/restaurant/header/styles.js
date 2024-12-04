import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  titleStyle: {
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT23,
    color: appColors.white,
  },
  contentStyle: {
    color: appColors.lightYellow,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT19,
    marginTop: windowHeight(1.8),
  },
  imageStyle: {
    height: windowHeight(163),
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '63%',
    marginTop: windowWidth(30),
    marginHorizontal: windowWidth(16),
  },
  row: {
    flexDirection: 'row',
    width: '34%',
    justifyContent: 'space-between',
  },
  marginTop: {
    marginTop: windowHeight(6),
  },
  mainContainer: {
    position: 'absolute',
  },
  textView: {
    marginHorizontal: windowHeight(10),
    marginVertical: windowWidth(15),
    marginTop: windowHeight(13),
  },
  rowView: {
    flexDirection: 'row',
  },
  image: {
    height: windowHeight(80),
    width: windowWidth(80),
    resizeMode: 'contain',
  },
  shopLogo: {
    backgroundColor: appColors.white,
    height: windowHeight(72),
    width: windowWidth(105),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(5),
    marginTop: windowHeight(4),
  },
  clock: {
    height: windowHeight(16),
    width: windowWidth(16),
    resizeMode: 'contain',
    marginVertical: windowHeight(1.5),
  },
  time: {
    color: appColors.lightYellow,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT17,
    marginHorizontal: windowWidth(6),
  },
  dotStyle: {
    height: windowHeight(5),
    width: windowWidth(7),
    borderRadius: windowHeight(25),
    backgroundColor: appColors.white,
    marginLeft: windowWidth(5),
    marginTop: windowHeight(7),
  },
  headerView: {
    flexDirection: 'row',
    width: windowWidth(100),
    justifyContent: 'space-between',
    left: windowWidth(10),
  },
  socialView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topView: {
    justifyContent: 'space-between',
    width: '75%',
    marginTop: windowWidth(25),
  },
});
