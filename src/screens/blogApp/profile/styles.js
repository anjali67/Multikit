import {StyleSheet} from 'react-native';
import {windowWidth, fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  margin: {
    marginVertical: windowHeight(20),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: windowWidth(20),
  },
  image: {
    height: windowHeight(60),
    width: windowHeight(60),
    resizeMode: 'contain',
    borderRadius: windowHeight(30),
  },
  textView: {
    margin: windowHeight(10),
  },
  title: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT21,
  },
  content: {
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT18,
    marginTop: windowHeight(2),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  vertical: {
    height: '85%',
    width: 1.1,
    backgroundColor: appColors.verticalLine,
    marginTop: windowHeight(7),
    marginHorizontal: windowWidth(35),
  },
  nameStyle: {
    color: appColors.blogContent,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT19,
  },
  textDivision: {
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  mainContainer: {
    backgroundColor: appColors.chooseTopic,
    paddingHorizontal: windowHeight(20),
    marginVertical: windowHeight(7),
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth(205),
    borderRadius: windowHeight(15),
    paddingVertical: windowHeight(14),
    marginHorizontal: windowWidth(0),
  },
  name: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratMedium,
    marginTop: windowHeight(6),
  },
  btnView: {
    width: '88%',
    marginVertical: windowHeight(40),
    borderRadius: windowHeight(4),
    height: windowHeight(47),
    borderColor: appColors.activeTopic,
    borderWidth: 1,
    height: windowHeight(40),
  },
  btnStyle: {
    color: appColors.fontColor,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.MontserratSemiBold,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    marginTop: windowHeight(25),
  },
});
