import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  marginTop: {
    marginTop: windowHeight(20),
    marginHorizontal: windowWidth(20),
  },
  container: {
    backgroundColor: appColors.grayLight,
    paddingHorizontal: windowHeight(10),
    paddingVertical: windowHeight(20),
    marginTop: windowHeight(15),
    borderRadius: windowHeight(11),
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    height: windowHeight(78),
    width: windowWidth(118),
    resizeMode: 'contain',
    borderRadius: windowHeight(10),
  },
  margin: {
    marginHorizontal: windowWidth(18),
    marginTop: windowHeight(9),
  },
  imageStyle: {
    height: windowHeight(20),
    width: windowWidth(20),
    resizeMode: 'contain',
  },
  title: {
    color: appColors.nftTitle,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT21HALF,
  },
  price: {
    marginTop: windowHeight(3),
    color: appColors.nftTitle,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT19,
    marginTop: windowHeight(6),
  },
  content: {
    color: appColors.cabContent,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT16,
    marginTop: 2,
    marginHorizontal: 4,
  },
  containerView: {
    width: windowWidth(100),
    paddingVertical: windowHeight(8),
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
  },
  right: {
    marginRight: windowWidth(18),
  },
});
