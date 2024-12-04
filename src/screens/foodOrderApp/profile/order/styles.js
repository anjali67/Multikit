import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainView: {
    marginVertical: windowHeight(8),
    backgroundColor: appColors.white,
    width: '90%',
    marginHorizontal: windowWidth(20),
    padding: windowHeight(12),
    borderRadius: windowHeight(12),
  },
  mainContainer: {
    marginTop: windowHeight(20),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    height: windowHeight(64),
    width: windowWidth(100),
    borderRadius: windowHeight(10),
    marginLeft: windowWidth(40),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  sucess: {
    height: windowHeight(20),
    width: windowWidth(20),
    resizeMode: 'contain',
    right: windowWidth(3),
  },
  deliveredView: {
    flexDirection: 'row',
    backgroundColor: appColors.lightBorder,
    height: windowHeight(26),
    marginHorizontal: windowWidth(30),
    paddingHorizontal: windowWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
  },
  title: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoSemibold,
    fontSize: fontSizes.FONT19,
  },
  textContainer: {
    marginLeft: windowWidth(20),
    marginTop: windowHeight(2),
  },
  content: {
    color: appColors.foodContent,
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT16,
    marginTop: windowHeight(1),
  },
  marginTop: {
    marginTop: windowHeight(7),
  },
  deliverdText: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT14,
  },
  textStyle: {
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoRegular,
    fontSize: fontSizes.FONT18,
  },
  fontsize: {
    fontSize: fontSizes.FONT17,
  },
  seperator: {
    borderBottomWidth: 1.4,
    borderBottomColor: appColors.lightBorder,
    paddingBottom: windowHeight(12),
  },
  scrollView: {
    paddingBottom: windowHeight(30),
  },
});
