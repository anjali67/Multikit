import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  textInput: {
    fontFamily: appFonts.MontserratRegular,
    flex: 1,
    paddingLeft: windowWidth(14),
    fontSize: fontSizes.FONT19,
  },
  inputContainer: {
    backgroundColor: appColors.grayLight,
    borderRadius: windowHeight(4),
    marginTop: windowHeight(12),
    backgroundColor: 'red',
  },
  margin: {
    marginHorizontal: windowWidth(20),
  },
  container: {
    marginBottom: windowHeight(8),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(60),
  },
  containerView: {
    marginVertical: windowHeight(20),
  },
  image: {
    width: '100%',
    height: windowHeight(300),
    resizeMode: 'stretch',
    borderRadius: windowHeight(10),
    overflow: 'hidden',
  },
  borderRadiusView: {
    width: '100%',
    height: windowHeight(300),
    resizeMode: 'cover',
    borderRadius: windowHeight(10),
    overflow: 'hidden',
  },
  mainView: {
    marginTop: windowHeight(18),
  },
  title: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT23,
    color: appColors.nftTitle,
  },
  content: {
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT17,
    color: appColors.nftTitle,
  },
  iconView: {
    marginTop: windowHeight(10),
    justifyContent: 'space-between',
    width: windowWidth(160),
    flexDirection: 'row',
  },
  filterView: {
    backgroundColor: appColors.grayLight,
    paddingVertical: windowHeight(11),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: windowHeight(6),
    height: windowHeight(40),
  },
  name: {
    color: appColors.nftTitle,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT19,
    marginHorizontal: windowWidth(20),
    borderBottomColor: appColors.nftBg,
  },
  propertyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.4,
    borderColor: appColors.borderColor,
    paddingVertical: windowHeight(6),
    marginTop: windowHeight(18),
    borderRadius: windowHeight(5),
  },
  offerView: {
    flexDirection: 'row',
    marginTop: windowHeight(10),

    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  nameStyle: {
    color: appColors.cabContent,
    fontFamily: appFonts.MontserratRegular,
    fontSize: fontSizes.FONT17HALF,
  },
  blanView: {
    height: windowHeight(10),
  },
  borderView: {
    height: windowHeight(40),
    borderBottomColor: appColors.nftBg,
    marginHorizontal: windowWidth(10),
    justifyContent: 'center',
  },
});
