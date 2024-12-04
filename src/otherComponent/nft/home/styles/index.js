import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default homeStyles = StyleSheet.create({
  image: {
    height: windowHeight(170),
    width: '100%',
    resizeMode: 'cover',
    borderRadius: windowHeight(5),
  },
  textView: {
    position: 'absolute',
    height: windowHeight(170),
    justifyContent: 'center',
    paddingHorizontal: windowWidth(20),
  },
  textStyle: {
    width: windowWidth(230),
    color: appColors.white,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT20,
  },
  containerView: {
    backgroundColor: appColors.white,
    paddingVertical: windowHeight(7.5),
    width: windowWidth(155),
    marginTop: windowHeight(15),
    borderRadius: windowHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: appColors.nftBtn,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT18HALF,
  },
  content: {
    color: appColors.cabContent,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT17HALF,
    marginTop: windowHeight(2),
  },
  rate: {
    color: appColors.nftTitle,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT18,
  },
  container: {
    borderRadius: windowWidth(26),
  },
  imageStyle: {
    width: windowHeight(49),
    height: windowHeight(49),
    resizeMode: 'contain',
    marginRight: windowWidth(6),
    borderRadius: windowHeight(100),
    borderColor: appColors.inputBorder,
  },

  title: {
    fontSize: fontSizes.FONT18,
    color: appColors.cabContent,
    fontFamily: appFonts.MontserratMedium,
    bottom: windowHeight(6),
    alignSelf: 'center',
    marginTop: windowHeight(14),
  },
  mainContainer: {
    flex: 1,
    margin: windowHeight(4),
  },
  mainView: {
    marginTop: windowHeight(16),
  },
  headingText: {
    color: appColors.ecommorcePrimary,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT20,
    marginTop: windowHeight(10),
  },
  seeAllStyle: {
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18HALF,
    marginTop: windowHeight(10),
  },
  rowStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(6),
  },
  collectionImg: {
    width: windowHeight(50),
    height: windowHeight(50),
    resizeMode: 'contain',
  },
  marginTop: {
    marginTop: windowHeight(17),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageView: {
    width: windowHeight(45),
    height: windowHeight(43),
    resizeMode: 'contain',
    borderRadius: windowHeight(13),
    overflow: 'hidden',
  },
  margin: {
    marginHorizontal: windowWidth(16),
  },
  seperator: {
    width: '100%',
    backgroundColor: appColors.divider,
    alignSelf: 'center',
    height: 1,
    marginTop: windowHeight(10),
    marginBottom: windowHeight(10),
  },
  notableCollectionImg: {
    height: windowHeight(142),
    width: windowWidth(190),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleView: {
    backgroundColor: appColors.white,
    flexDirection: 'row',
    bottom: windowHeight(10),
    paddingHorizontal: windowWidth(8),
    borderRadius: windowHeight(4),
    paddingVertical: windowHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyImg: {
    height: windowHeight(20),
    width: windowWidth(20),
    resizeMode: 'contain',
    top: windowHeight(1),
    left: windowWidth(3),
  },
  circleView: {
    height: windowHeight(25),
    width: windowHeight(25),
    borderRadius: windowWidth(30),
    backgroundColor: appColors.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
