import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(10),
    marginHorizontal: windowWidth(18),
    
  
  },
  row: {
    flexDirection: 'row',
  },
  rowContainer: {
    justifyContent: 'space-between',
    marginBottom: windowHeight(15),
    backgroundColor: appColors.reviewsBg,
    borderRadius: windowHeight(10),
    height: windowHeight(110),

   
   
  },
  imageStyle: {
    height: windowHeight(110),
    width: windowWidth(160),
    resizeMode: 'cover',
    borderTopLeftRadius: windowWidth(10),
    borderBottomLeftRadius: windowWidth(10),
  },
  textContainer: {
    marginHorizontal: windowWidth(15),
    marginTop: windowHeight(12),
  },
  name: {
    color: appColors.reviewText,
    fontSize: fontSizes.FONT19HALF,
    fontFamily: appFonts.MontserratMedium,
    marginBottom: windowHeight(1),

    width: windowWidth(210),
  },
  addressView: {
    marginVertical: windowHeight(3),
    flexDirection: 'row',
  },
  address: {
    marginHorizontal: windowWidth(5),
    color: appColors.label,
    fontSize: fontSizes.FONT17,
    fontFamily: appFonts.MontserratRegular,
  },
  starImg: {
    height: windowHeight(20),
    width: windowWidth(20),
    resizeMode: 'contain',
    bottom: windowHeight(3),
  },
  rate: {
    color: appColors.reviewText,
    fontSize: fontSizes.FONT19HALF,
    fontFamily: appFonts.MontserratRegular,
    marginHorizontal: windowWidth(3),
    bottom: windowHeight(2),
    left: windowWidth(2),
  },
  containerView: {
    flexDirection: 'row',
    paddingHorizontal: windowHeight(5),
    borderRadius: windowHeight(7),
    paddingVertical: windowHeight(3),
    left: windowWidth(6),
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: windowHeight(15),
    bottom: windowHeight(12),
  },
  price: {
    color: appColors.white,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT17,
  },
  textStyle: {
    color: appColors.white,
    opacity: 0.8,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT14,
    marginTop: windowHeight(2),
  },
  top: {
    marginTop: windowHeight(-1),
  },
  circleView: {
    height: windowHeight(20),
    width: windowWidth(30),
    borderRadius: windowHeight(40),
    backgroundColor: appColors.white,
    bottom: windowHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    left: windowWidth(6),
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
