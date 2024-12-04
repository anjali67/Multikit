import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainView: {
    marginTop: windowHeight(4),
  },
  list: {
    marginHorizontal: windowWidth(24),
  },
  listView: {
    paddingVertical: windowHeight(15),
  },
  arrowView: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  type: {
    fontSize: fontSizes.FONT21,
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratMedium,
  },
  arrow: {
    height: windowHeight(26),
    width: windowHeight(26),
    borderRadius: windowHeight(13),
    alignItems: 'center',
    justifyContent: 'center',
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: windowHeight(6),
    paddingHorizontal: windowWidth(20),
    marginTop: windowHeight(10),
    borderColor: appColors.forgotFont,
    backgroundColor: appColors.category,
    justifyContent: 'space-between',
  },
  icon: {
    height: windowHeight(50),
    width: windowWidth(50),
    resizeMode: 'contain',
    marginLeft: windowWidth(15),
  },
  value: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.MontserratMedium,
    marginLeft: windowWidth(14),
    color: appColors.ecommerceFont,
  },
  top: {
    marginTop: windowHeight(15),
  },
  selectView: {
    paddingHorizontal: windowWidth(6),
    position: 'absolute',
    right: 0,
    top: 0,
    paddingVertical: windowHeight(3),
  },
  selectLeft: {
    borderTopEndRadius: windowHeight(5),
    borderBottomStartRadius: windowHeight(5),
  },
  selectRight: {
    borderTopStartRadius: windowHeight(5),
    borderBottomEndRadius: windowHeight(5),
  },
  valueList: {
    alignItems: 'center',
    marginTop: windowHeight(10),
    width: '49%',
    flexDirection: 'row',
    marginVertical: windowHeight(9),
  },
  valueTxt: {
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.MontserratMedium,
    color: appColors.ecommerceFont,
  },
  valueLeft: {
    marginLeft: windowWidth(10),
  },
  valueRight: {
    marginRight: windowWidth(10),
  },
  radioBtn: {
    height: windowHeight(16),
    width: windowWidth(22),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: appColors.border,
    borderWidth: 1,
  },
  radioButtonIcon: {
    height: windowHeight(6),
    width: windowWidth(9),
    borderRadius: 7,
    backgroundColor: appColors.groceryBtn,
    marginHorizontal: windowWidth(20),
  },
  newAddView: {
    width: '98%',
    paddingVertical: windowHeight(10),
    borderRadius: windowHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: windowHeight(20),
    flexDirection: 'row',
    backgroundColor: appColors.category,
  },
  addAdd: {
    fontSize: fontSizes.FONT22,
    marginHorizontal: windowWidth(5),
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratRegular,
  },
  minus: {
    fontSize: fontSizes.FONT21,
    color: appColors.ecommerceFont,
    fontFamily: appFonts.MontserratBold,
  },
  row: {
    flexDirection: 'row',
  },

  selectView: {
    backgroundColor: appColors.primary,
    paddingHorizontal: windowHeight(6),
    position: 'absolute',
    top: 0,
    paddingVertical: windowHeight(3),
    right: 0,
  },
});
