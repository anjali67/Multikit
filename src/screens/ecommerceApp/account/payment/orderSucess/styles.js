import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  circleView: {
    marginVertical: windowHeight(4),
    height: windowHeight(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleImage: {
    height: windowHeight(100),
    width: windowWidth(130),
    resizeMode: 'contain',
  },
  mainContainer: {
    marginTop: windowHeight(30),
  },
  title: {
    marginVertical: windowHeight(6),
    color: appColors.ecommerceFont,
    fontSize: fontSizes.FONT24,
    fontFamily: appFonts.MontserratSemiBold,
    alignSelf: 'center',
  },
  subTitle: {
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
    marginHorizontal: windowWidth(40),
    fontSize: fontSizes.FONT20,
    textAlign: 'center',
    lineHeight: windowHeight(20),
  },
  divider: {
    width: '90%',
    backgroundColor: appColors.lightGray,
    alignSelf: 'center',
    height: 0.8,
    marginTop: windowHeight(4),
  },
  mainStyle: {
    backgroundColor: appColors.bgColor,
    borderRadius: windowHeight(5),
    paddingHorizontal: windowHeight(12),
    paddingVertical: windowHeight(8),
  },
  mainView: {
    paddingVertical: windowHeight(1),
    paddingHorizontal: windowWidth(40),
  },
  cartText: {
    marginTop: windowHeight(6),
  },
  scrollView: {
    paddingBottom: windowHeight(27),
  },
  blankView: {
    height: windowHeight(34),
  },
  textView: {
    paddingVertical: windowHeight(7),
  },
  titleStyle: {
    fontFamily: appFonts.MontserratMedium,
  },
  textStyle: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.MontserratMedium,
  },
});
