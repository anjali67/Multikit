import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import {fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';

export default styles = StyleSheet.create({
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
    height: windowHeight(100),
    width: '93%',
    marginHorizontal: windowWidth(10),
    borderRadius: windowHeight(5),
    padding: windowHeight(10),
    marginBottom: windowHeight(12),
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: windowHeight(80),
    width: windowWidth(120),
    borderRadius: windowHeight(7),
  },
  row: {
    flexDirection: 'row',
    width: '81%',
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
    fontSize: fontSizes.FONT17HALF,
    color: appColors.ecommerceFont,
    marginVertical: windowHeight(2),
  },
  price: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT17HALF,
    color: appColors.ecommerceFont,
  },
  viewDetail: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT17HALF,
    color: appColors.forgotFont,
    marginHorizontal: windowWidth(12),
    borderBottomColor: appColors.forgotFont,
    borderBottomWidth: 0.7,
  },
  deliverView: {
    backgroundColor: appColors.white,
    width: windowWidth(84),
    height: windowHeight(18),
    borderRadius: windowHeight(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT15,
    color: appColors.ecommerceFont,
  },
  textInputContainer: {
    height: windowHeight(50),
  },
  inputContainer: {
    width: '82%',
    height: '69%',
    marginTop: windowHeight(10),
  },
});
