import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  title: {
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
  },
  row: {
    flexDirection: 'row',
    marginVertical: windowHeight(11),
    marginHorizontal: windowWidth(12),
    justifyContent: 'space-between',
  },
  imageView: {
    flex: 4,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  image: {
    height: windowHeight(180),
    width: windowWidth(290),
    resizeMode: 'contain',
  },
  topView: {
    flex: 1,
  },
  bottomView: {
    flex: 1,
    bottom: 0,
    position: 'absolute',
    backgroundColor: appColors.white,
    paddingVertical: windowHeight(10),
    width: '100%',
    paddingHorizontal: windowWidth(20),
    borderTopColor: appColors.divider,
    borderTopWidth: 1.4,
    justifyContent: 'space-between',
  },
  inputView: {
    marginHorizontal: windowWidth(10),
  },
  inputStyle: {
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
  },
  horizontalLine: {
    borderTopColor: appColors.divider,
    borderTopWidth: 1.2,
    marginVertical: windowHeight(2),
    marginHorizontal: windowWidth(10),
    width: '98%',
  },
  btnView: {
    backgroundColor: appColors.activeTopic,
    paddingHorizontal: windowWidth(35),
    paddingVertical: windowHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(5),
  },
  btnText: {
    color: appColors.blackColor,
    fontFamily: appFonts.MontserratSemiBold,
    fontSize: fontSizes.FONT19HALF,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginTop: windowHeight(1),
  },
  bottomContainer: {
    flexDirection: 'row',
    width: '38%',
    justifyContent: 'space-between',
    left: windowWidth(19),
  },
});
