import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainContainer: {
    marginBottom: windowHeight(0),
  },
  option: {
    width: windowWidth(40),
    height: windowHeight(28),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
    backgroundColor: appColors.forgotFont,
    borderRadius: windowHeight(20),
    margin: windowHeight(4),
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(8),
  },
  location: {
    height: windowHeight(39),
    marginVertical: windowHeight(12),
    flexDirection: 'row',
  },
  sepratorImg: {
    position: 'absolute',
    alignSelf: 'center',
    resizeMode: 'contain',
    height: windowHeight(30),
    width: windowWidth(20),
    top: windowHeight(40),
  },
  homeView: {
    justifyContent: 'space-between',
    height: windowHeight(20),
  },
  storeLocation: {
    justifyContent: 'space-between',
  },
  storeLeft: {
    marginLeft: windowWidth(10),
  },
  storeRight: {
    marginRight: windowWidth(10),
  },
  locationTxt: {
    fontSize: fontSizes.FONT19,
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratSemiBold,
    marginTop: windowHeight(8),
  },
  row: {
    flexDirection: 'row',
  },
  date: {
    color: appColors.subTitle,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT16,
    marginTop: windowHeight(2),
  },
  margin: {
    marginBottom: windowHeight(22),
  },
});
