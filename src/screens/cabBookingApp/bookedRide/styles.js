import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainView: {
    position: 'absolute',
    bottom: windowHeight(200),
    marginHorizontal: windowWidth(30),
    backgroundColor: appColors.white,
    borderRadius: windowHeight(12),
    width: '90%',
    height: windowHeight(65),
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(19),
    marginTop: windowHeight(-8),
  },
  bottomView: {
    backgroundColor: appColors.white,
    borderTopEndRadius: windowHeight(20),
    borderTopLeftRadius: windowHeight(20),
    paddingHorizontal: windowHeight(0),
    paddingVertical: windowHeight(20),
  },
  singleRow: {
    flexDirection: 'row',
  },
  background: {
    backgroundColor: appColors.lightBorder,
    marginHorizontal: windowWidth(8),
    height: windowHeight(34),
    width: windowWidth(50),
    borderRadius: windowHeight(3),
    alignItems: 'center',
    justifyContent: 'center',
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
  title: {
    color: appColors.cabText,
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.RobotoRegular,
  },
  contentStyle: {
    color: appColors.foodContent,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.RobotoRegular,
  },
  rowView: {
    marginTop: windowHeight(10),
  },
  mainViewStyle: {
    backgroundColor: appColors.reviewsBg,
    marginTop: windowHeight(15),
    paddingVertical: windowHeight(4),
    borderRadius: windowHeight(20),
    paddingHorizontal: windowWidth(16),
    marginHorizontal: windowWidth(6),
    right: windowWidth(10),
  },
  titleStyle: {
    fontSize: fontSizes.FONT19,
  },
  containerView: {
    width: windowWidth(205),
    paddingVertical: windowHeight(11.5),
  },
  container: {
    height: windowHeight(480),
  },
});
