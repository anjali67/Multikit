import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default Styles = StyleSheet.create({
  image: {
    height: windowHeight(190),
    width: '100%',
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerContainer: {
    position: 'absolute',
  },
  containerStyle: {
    height: windowHeight(110),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconView: {
    backgroundColor: appColors.white,
    height: windowHeight(32),
    width: windowHeight(32),
    borderRadius: windowHeight(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: {
    marginVertical: windowHeight(10),
    marginHorizontal: windowWidth(20),
  },
  user: {
    color: appColors.learningUser,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT19,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterSemiBold,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(1),
    width: windowWidth(350),
    lineHeight: windowHeight(19),
  },
  content: {
    marginTop: windowHeight(3),
    color: appColors.learningPlaceholder,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT18,
  },
  dotView: {
    height: windowHeight(4),
    width: windowHeight(4),
    borderRadius: windowHeight(20),
    backgroundColor: appColors.learningPlaceholder,
  },
  row: {
    flexDirection: 'row',
  },
  priceView: {
    backgroundColor: appColors.divider,
    height: windowHeight(45),
    width: windowWidth(75),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
    paddingVertical: windowHeight(3),
    left: windowWidth(6),
  },
  price: {
    fontFamily: appFonts.InterSemiBold,
    fontSize: fontSizes.FONT18,
    color: appColors.learningPlaceholder,
  },
  marginHorizontal: {
    marginHorizontal: windowWidth(20),
  },
  containerView: {
    marginTop: windowHeight(4),
    justifyContent: 'center',
    marginHorizontal: windowWidth(20),
  },
  inputView: {
    width: '94%',
    height: windowHeight(46),
    backgroundColor: '#eff1f3',
    position: 'absolute',
    top: 10,
    alignSelf: 'flex-end',
    borderRadius: windowHeight(4),
  },
  input: {
    width: '98%',
    height: windowHeight(49),
    backgroundColor: '#F5F7F7',
    marginBottom: 10,
    borderRadius: windowHeight(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatlistStyle: {
    paddingBottom: windowHeight(60),
  },
  paddingHorizontal: {
    paddingHorizontal: windowWidth(20),
  },
  courseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  courserNumber: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT21,
  },
  iconContainer: {
    backgroundColor: appColors.learningBtn,
    height: windowHeight(26),
    width: windowHeight(26),
    marginHorizontal: 15,
    borderRadius: windowHeight(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradinatBtn: {
    height: windowHeight(46),
    width: windowWidth(441),
    borderRadius: windowHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    marginHorizontal: 14,
    width: '65%',
  },
});
