import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default foodOrderStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.foodPrimary,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: '88%',
    backgroundColor: appColors.foodBtn,
    marginTop: windowHeight(25),
    borderRadius: windowHeight(12),
    height: windowHeight(42),
  },
  btn: {
    color: appColors.white,
    fontSize: fontSizes.FONT23,
    fontFamily: appFonts.LatoSemibold,
  },
  textInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.white,
    height: windowHeight(45),
    borderRadius: windowHeight(14),
    paddingLeft: windowWidth(3),
    marginTop: windowHeight(15),
    width: '99.5%',
    elevation: 3,
  },
  bottomContainerView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: appColors.white,
    paddingHorizontal: windowWidth(50),
    borderTopColor: appColors.lightBorder,
    borderTopWidth: 1.6,
  },
  containerStyle: {
    width: '88%',
    marginBottom: windowHeight(6),

    borderTopWidth: 0,
  },
  btnStyle: {
    height: windowHeight(35),
    paddingHorizontal: windowWidth(10),
  },
  btnText: {
    fontFamily: appFonts.LatoBold,
  },
 
});
