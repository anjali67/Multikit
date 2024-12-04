import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  titleStyle: {
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT21,
    marginTop: windowHeight(7),
    color: appColors.ecommorcePrimary,
    marginBottom: windowHeight(3),
  },
  title: {
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT20,
    color: appColors.ecommorcePrimary,
    marginVertical: windowHeight(2),
  },
  container: {
    margin: windowHeight(10),
  },
  background: {
    backgroundColor: appColors.bgColor,
    height: windowHeight(97),
    width: '93%',
    marginHorizontal: windowWidth(17),
    borderRadius: windowHeight(5),
    padding: windowHeight(10),
    marginBottom: windowHeight(12),
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(12),
  },
  image: {
    height: windowHeight(80),
    width: windowWidth(120),
    borderRadius: windowHeight(7),
  },
  row: {
    flexDirection: 'row',
    width: '90%',
  },
  sizeContainer: {
    marginTop: windowHeight(4),
  },
  top: {
    marginTop: windowHeight(11),
  },
  sizeText: {
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT17HALF,
    color: appColors.subTitle,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainers: {
    marginHorizontal: windowWidth(14),
    marginTop: windowHeight(4),
  },
  name: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT17,
    color: appColors.ecommerceFont,
    marginVertical: windowHeight(2),
  },
  price: {
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT20,
    color: appColors.forgotFont,
  },
  textInputContainer: {
    height: windowHeight(50),
  },
  inputContainer: {
    width: '82%',
    height: '69%',
    marginTop: windowHeight(10),
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  priceContainer: {
    width: '52%',
  },
  icon: {
    right: windowWidth(3),
    height: windowHeight(20),
    width: windowWidth(15),
    marginVertical: windowHeight(7),
  },
  divider: {
    width: '90%',
    backgroundColor: appColors.lightGray,
    alignSelf: 'center',
    height: 0.8,
    marginTop: windowHeight(12),
  },
  mainStyle: {
    marginTop: windowHeight(17),
  },
  toastView: {
    backgroundColor: '#F5C2C7',
    flexDirection: 'row',
    height: windowHeight(38),
    width: '60%',
    left: windowWidth(80),
    top: windowHeight(-20),
    borderRadius: windowHeight(10),
    padding: windowHeight(10),
    marginTop: windowWidth(2),
  },
  alertText: {
    color: '#6A1A21',
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.MontserratRegular,
    marginHorizontal: windowWidth(6),
  },
});
