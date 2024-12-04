import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  orderDetailView: {
    width: '92%',
    alignSelf: 'center',
    backgroundColor: appColors.category,
    borderRadius: windowHeight(10),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: windowWidth(10),
    marginTop: windowHeight(10),
    paddingVertical: windowHeight(20),
  },
  idView: {
    marginLeft: windowWidth(10),
  },
  id: {
    fontSize: fontSizes.FONT20,
    color: appColors.white,
  },
  orderDetail: {
    fontSize: fontSizes.FONT22,
    color: appColors.white,
  },
  item: {
    fontSize: fontSizes.FONT22,
    marginHorizontal: windowWidth(20),
    fontFamily: appFonts.PublicSansMedium,
    color: appColors.groceryBtn,
    marginTop: windowHeight(19),
  },
  listView: {
    marginLeft: windowWidth(20),
    alignItems: 'center',
    marginTop: windowHeight(15),
    flexDirection: 'row',
  },
  boxView: {
    height: windowHeight(51),
    width: windowWidth(72),
    backgroundColor: appColors.category,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(4),
  },
  image: {
    width: windowWidth(48),
    height: windowHeight(23),
    resizeMode: 'contain',
  },
  quantityTxt: {
    fontSize: fontSizes.FONT18,
    color: appColors.black,
    width: windowWidth(30),
    borderRadius: windowWidth(5),
    textAlignVertical: 'center',
    textAlign: 'center',
    left: windowWidth(8),
    fontFamily: appFonts.PublicSansMedium,
    bottom: windowHeight(7),
  },
  nameView: {marginLeft: windowWidth(20)},
  nameTxt: {
    fontSize: fontSizes.FONT19,
    color: appColors.black,
    fontFamily: appFonts.PublicSansMedium,
  },
  gramTxt: {
    fontSize: fontSizes.FONT16,
    color: appColors.groceryFont,
    fontFamily: appFonts.PublicSansMedium,
    marginTop: windowHeight(4),
  },
  price: {
    fontSize: fontSizes.FONT24,
    position: 'absolute',
    right: windowWidth(20),
    fontSize: fontSizes.FONT18,
    color: appColors.groceryBtn,
    fontFamily: appFonts.PublicSansBold,
  },
  dataView: {
    marginTop: windowHeight(10),
  },
  addTxt: {
    marginLeft: windowWidth(20),
    fontSize: fontSizes.FONT24,
  },
  name: {
    marginLeft: windowWidth(20),
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(10),
  },
  locationTxt: {
    marginLeft: windowWidth(20),
    color: appColors.groceryFont,
    fontSize: fontSizes.FONT21,
  },
  paymentView: {
    marginTop: windowHeight(20),
    marginBottom: windowHeight(80),
  },
  number: {
    flexDirection: 'row',
    marginLeft: windowWidth(20),
    alignItems: 'center',
  },
  masterCardImg: {
    height: windowHeight(60),
    width: windowWidth(60),
    resizeMode: 'contain',
  },
  cardNumber: {
    marginLeft: windowWidth(10),
    fontSize: fontSizes.FONT21,
  },
  btn: {
    width: '94%',
    backgroundColor: appColors.groceryBtn,
    position: 'absolute',
    bottom: windowHeight(10),
    alignSelf: 'center',
  },
  cross: {
    fontSize: fontSizes.FONT26,
    marginTop: windowHeight(6),
    color: appColors.black,
    left: windowWidth(10),
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: appFonts.PublicSansMedium,
    bottom: windowHeight(10),
  },
});
