import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 90,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(20),
    backgroundColor: appColors.white,
    marginTop: windowHeight(20),
    alignItems: 'center',
    justifyContent: 'center',
    padding: windowHeight(9),
  },
  text: {
    marginHorizontal: windowWidth(15),
    fontFamily: appFonts.PublicSansMedium,
    color: appColors.black,
    fontSize: fontSizes.FONT19,
  },
  inputStyle: {
    borderRadius: windowHeight(11),
    height: windowHeight(45),
    backgroundColor: appColors.white,
    shadowColor: '#000000',
    borderWidth: 1.3,
    elevation: 0,
    borderColor: appColors.border,
  },
  inputText: {
    height: windowHeight(45),
  },
  paymentView: {
    borderTopStartRadius: windowHeight(15),
    borderTopEndRadius: windowHeight(15),
    width: '100%',
    paddingHorizontal: windowWidth(20),
    paddingTop: windowHeight(10),
  },
  locationView: {
    marginTop: windowHeight(19),
    alignItems: 'center',
    marginBottom: windowHeight(10),
    flexDirection: 'row',
    marginBottom: windowHeight(16),
  },
  location: {
    backgroundColor: appColors.groceryBtn,
    width: windowWidth(40),
    height: windowHeight(27),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(6),
  },
  locationTxt: {
    marginLeft: windowWidth(20),
    fontSize: fontSizes.FONT24,
    fontFamily: appFonts.PublicSansSemiBold,
    color: appColors.black,
  },
  addView: {
    marginHorizontal: windowHeight(9),
    marginVertical: windowHeight(7),
    paddingBottom: windowHeight(15),
    borderBottomColor: '#E0E0E0',
    right: windowWidth(10),
    width: '95%',
  },
  nameView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  name: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.PublicSansSemiBold,
    marginLeft: windowWidth(10),
    color: appColors.black,
  },
  add: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.PublicSansRegular,
    color: appColors.groceryFont,
    marginTop: windowHeight(5),
  },
  btnStyle: {
    width: '93%',
    backgroundColor: appColors.groceryBtn,
    marginHorizontal: windowWidth(10),
    marginTop: windowHeight(15),
    bottom: windowHeight(10),
  },
  blank: {
    height: windowHeight(10),
  },
  btn: {
    color: appColors.white,
    fontSize: fontSizes.FONT21,
    fontFamily: appFonts.PublicSansMedium,
  },
});
