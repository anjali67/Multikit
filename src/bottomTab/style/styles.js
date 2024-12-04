import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  iconStyle: {
    height: windowHeight(29),
    width: windowWidth(29),
    resizeMode: 'contain',
    top: windowHeight(3),
  },
  top: {
    top: windowHeight(3),
  },
  tabContainer: {
    height: windowHeight(55),
    width: '100%',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: appColors.white,
    elevation: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: windowWidth(10),
    borderTopColor: appColors.divider,
    borderTopWidth: 1.4,
    bottom: 0,
  },
  row: {
    flexDirection: 'row',
    height: windowHeight(65),
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontSize: fontSizes.FONT15HALF,
    fontFamily: appFonts.MontserratRegular,
    color: appColors.fontColor,
  },
  mainView: {
    marginHorizontal: windowWidth(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    position: 'absolute',
    bottom: windowHeight(26),
    borderTopColor: appColors.fontColor,
    borderTopWidth: 2,
    height: windowHeight(20),
    width: windowWidth(50),
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    height: windowHeight(45),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  bottomTabIcon: {
    height: windowHeight(32),
    width: windowWidth(32),
    resizeMode: 'contain',
    bottom: windowHeight(8),
  },
  fitnesstabContainer: {
    height: windowHeight(48),
    width: '100%',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: appColors.white,
    elevation: 4,
    alignItems: 'center',
    paddingHorizontal: windowWidth(10),
    bottom: windowHeight(0),
  },
  dot: {
    height: windowHeight(5),
    width: windowWidth(7),
    borderRadius: windowHeight(10),
    marginBottom: windowHeight(8),
  },
  ring: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 40,
    borderColor: appColors.gradient1,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartTab:{
    backgroundColor:appColors.nftBg,
    padding:windowHeight(8),
    borderRadius:windowHeight(30)
  },
  tab:{
    alignItems:"center"
  },
  blogTabContainer:{
    position: 'absolute',
    bottom: 0,
    height: windowHeight(50),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(20),
    elevation: 6,
    alignItems: 'center',
  },
  center:{
    alignItems: 'center',
   justifyContent: 'center',
  }
});
