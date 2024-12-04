import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.groceryBtn,
  },
  profileView: {
    margin: windowHeight(20),
    alignItems: 'center',
  },
  image: {
    height: windowHeight(68),
    width: windowWidth(100),
    borderRadius: windowHeight(100),
    resizeMode: 'contain',
  },
  textStyle: {
    marginTop: windowHeight(8),
    fontFamily: appFonts.PublicSansRegular,
    color: appColors.white,
    fontSize: fontSizes.FONT19,
  },
  mail: {
    marginTop: windowHeight(5),
    fontFamily: appFonts.PublicSansRegular,
    color: appColors.lightGray1,
    fontSize: fontSizes.FONT18,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: windowWidth(10),
    marginTop: windowHeight(5),
  },
  imageStyle: {
    height: windowHeight(15),
    width: windowWidth(25),
    resizeMode: 'contain',
  },
  title: {
    fontSize: fontSizes.FONT20,
    marginHorizontal: windowWidth(18),
    color: appColors.white,
    fontFamily: appFonts.PublicSansRegular,
  },
  bottomView: {
    marginHorizontal: windowWidth(23),
    backgroundColor: appColors.white,
    paddingVertical: windowHeight(8),
    borderRadius: windowHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logOut: {
    color: appColors.groceryBtn,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.PublicSansMedium,
  },
});
