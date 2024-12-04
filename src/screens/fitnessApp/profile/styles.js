import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
export default styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: windowHeight(10),
    marginTop: windowHeight(10),
  },
  userProfile: {
    width: windowWidth(100),
    height: windowHeight(72),
    borderRadius: windowHeight(50),
    marginLeft: windowWidth(16),
    marginTop: windowHeight(10),
  },
  name: {
    fontSize: fontSizes.FONT20,
    color: appColors.fontColor,
    fontFamily: appFonts.NunitoSansSemiBold,
    marginTop: windowHeight(12),
  },
  email: {
    fontSize: fontSizes.FONT19,
    color: appColors.fitnessContent1,
    fontFamily: appFonts.NunitoSansSemiBold,
    marginTop: windowHeight(6),
  },
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

    justifyContent: 'space-between',
  },
  imageStyle: {
    height: windowHeight(15),
    width: windowWidth(25),
    resizeMode: 'contain',
  },
  title: {
    fontSize: fontSizes.FONT19,
    marginHorizontal: windowWidth(18),
    color: appColors.black,
    fontFamily: appFonts.NunitoSansSemiBold,
  },
  bottomView: {
    marginHorizontal: windowWidth(23),
    borderColor: appColors.fitnessBtn,
    borderWidth: 1,
    paddingVertical: windowHeight(12),
    borderRadius: windowHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: windowHeight(8),
  },
  logOut: {
    color: appColors.fitnessBtn,
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.PublicSansMedium,
  },
  iconView: {
    height: windowHeight(32),
    width: windowWidth(48),
    backgroundColor: appColors.lightBorder,
    borderRadius: windowHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnView: {
    bottom: windowHeight(20),
  },
});
