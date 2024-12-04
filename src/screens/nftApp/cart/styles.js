import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    marginVertical: windowHeight(20),
    marginHorizontal: windowWidth(15),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: appColors.nftTitle,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT23,
  },
  seperator: {
    width: '100%',
    backgroundColor: appColors.divider,
    alignSelf: 'center',
    height: 1,
    marginTop: windowHeight(10),
    marginBottom: windowHeight(10),
  },
  marginTop: {
    marginTop: windowHeight(10),
  },
  buttonView: {
    width: '88%',
    marginVertical: windowHeight(15),
    borderRadius: windowHeight(12),
    height: windowHeight(47),
    borderColor: appColors.ecommerceFont,
    borderWidth: 1,
  },
  btn: {
    color: appColors.subTitle,
    fontSize: fontSizes.FONT23,
    fontFamily: appFonts.MontserratRegular,
  },
  btnStyle: {
    width: '95%',
    marginVertical: windowHeight(15),
    borderRadius: windowHeight(6),
    height: windowHeight(40),
    borderColor: appColors.ecommerceFont,
    borderWidth: 1,
    marginHorizontal: windowWidth(10),
  },
  checkoutBtn: {
    color: appColors.nftTitle,
    fontSize: fontSizes.FONT23,
    fontFamily: appFonts.MontserratMedium,
  },
  blankView: {
    height: windowHeight(30),
  },
});
