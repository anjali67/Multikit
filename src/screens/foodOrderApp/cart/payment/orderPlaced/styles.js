import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  loaderView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  mapView: {
    height: '60%',
    width: '100%',
    resizeMode: 'contain',
  },
  rowContainer: {
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '78%',
    marginVertical: windowHeight(12),
    position: 'absolute',
  },
  boxView: {
    backgroundColor: appColors.white,
    marginHorizontal: windowWidth(20),
    height: windowHeight(20),
    width: windowWidth(30),
    borderRadius: windowHeight(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: appColors.lightBorder,
    marginHorizontal: windowWidth(8),
    height: windowHeight(34),
    width: windowWidth(54),
    borderRadius: windowHeight(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    bottom: '18%',
    backgroundColor: appColors.white,
    paddingHorizontal: 12,
    marginHorizontal: windowWidth(20),
    borderRadius: windowHeight(8),
    paddingVertical: windowHeight(6),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: windowWidth(20),
    paddingVertical: windowHeight(4),
  },
  imageStyle: {
    height: windowHeight(40),
    width: windowWidth(65),
    resizeMode: 'contain',
  },
  textView: {
    marginHorizontal: windowWidth(20),
  },
  title: {
    fontSize: fontSizes.FONT19,
    color: appColors.foodSecondary,
    fontFamily: appFonts.LatoSemibold,
  },
  content: {
    color: appColors.foodBtn,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoSemibold,
  },
  contentStyle: {
    color: appColors.foodContent,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoRegular,
    marginTop: windowHeight(1),
  },
  fontsizes: {
    fontSize: fontSizes.FONT18,
    marginTop: windowHeight(2),
  },
  bottomView: {
    bottom: windowHeight(110),
    borderTopLeftRadius: windowHeight(20),
    borderTopRightRadius: windowHeight(20),
    backgroundColor: appColors.white,
    paddingVertical: windowHeight(12),
    paddingBottom: windowHeight(45),
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1.4,
    borderBottomColor: appColors.lightBorder,
    paddingBottom: windowHeight(0),
    marginHorizontal: windowWidth(19),
    marginTop: windowHeight(-8),
  },
  singleRow: {
    flexDirection: 'row',
  },
  user: {
    height: windowHeight(80),
    width: windowWidth(80),
    resizeMode: 'contain',
  },
  textView: {
    marginTop: windowHeight(22),
    marginHorizontal: windowWidth(16),
  },

  marginTop: {
    marginTop: windowHeight(22),
  },
  addressView: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(20),
    marginVertical: windowHeight(7),
  },
  address: {
    marginHorizontal: windowWidth(8),
  },
  topContent: {
    marginVertical: windowHeight(7),
    marginHorizontal: windowWidth(10),
  },
  blank: {
    height: windowHeight(12),
  },
});
