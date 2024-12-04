import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default coursesStyle = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalLine: {
    height: windowHeight(30),
    borderColor: '#9DACB1',
    borderWidth: 0.3,
    width: 0,
    marginTop: 10,

    marginVertical: 10,
    opacity: 0.6,
  },
  title: {
    color: appColors.white,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT21HALF,
    marginHorizontal: 17,
  },
  marginHorizontal: {
    marginHorizontal: 5,
  },
  titleStyle: {
    marginTop: 7,
    marginHorizontal: 20,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT21,
    color: appColors.learningBtn,
    marginBottom: windowHeight(9),
  },
  main: {
    height: windowHeight(34),
    width: '91%',
    borderRadius: windowHeight(12),
    flexDirection: 'row',
    marginHorizontal: windowWidth(15),
  },
  labelView: {
    paddingHorizontal: windowHeight(6),
    borderRadius: windowHeight(12),
    height: windowHeight(36),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeLabel: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterSemiBold,
    fontSize: fontSizes.FONT20,
  },
  inActiveLabel: {
    color: appColors.learningPlaceholder,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT19HALF,
  },
  inputView: {
    width: '94%',
    height: windowHeight(38),
    backgroundColor: '#eff1f3',
    position: 'absolute',
    top: 10,
    alignSelf: 'flex-end',
    borderRadius: windowHeight(4),
  },
  input: {
    width: '98%',
    height: windowHeight(42),
    backgroundColor: '#F5F7F7',
    marginBottom: 10,
    borderRadius: windowHeight(4),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  margin: {
    marginHorizontal: windowWidth(20),
    marginVertical: windowHeight(5),
  },
  nameStyle: {
    color: appColors.learningBtn,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT18,
    marginHorizontal: 14,
    marginTop: 0,
  },
  marginTop:{
    marginTop:windowHeight(13)
  }
});
