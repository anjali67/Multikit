import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    marginVertical: windowHeight(20),
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(15),
  },
  image: {
    height: windowHeight(130),
    width: '100%',
    resizeMode: 'cover',
    marginTop: windowHeight(10),
  },
  row: {
    flexDirection: 'row',
  },
  timerView: {
    backgroundColor: appColors.bgColor,
    paddingVertical: windowHeight(11),
    paddingHorizontal: windowWidth(19),
    marginHorizontal: windowWidth(15),
    borderRadius: windowHeight(5),
    color: appColors.nftTitle,
    fontFamily: appFonts.MontserratMedium,
  },
  mainView: {
    marginTop: windowHeight(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotView: {
    fontFamily: appFonts.MontserratSemiBold,
    height: windowHeight(4),
    width: windowWidth(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.bgColor,
    borderRadius: windowHeight(20),
    marginTop: windowHeight(6),
    bottom: windowHeight(3),
  },
  bottomView: {
    position: 'absolute',
    bottom: windowHeight(20),
    marginHorizontal: windowWidth(30),
  },
  contentContainerStyle:{
    paddingBottom:70
  }
});
