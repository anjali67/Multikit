import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';

export const GlobalStyle = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  modal: {
    padding: windowWidth(20),
    borderTopStartRadius: windowWidth(20),
    borderTopEndRadius: windowWidth(20),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
    backgroundColor: appColors.white,
  },
  shadowStyle: {
    shadowRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight(39),
    borderRadius: windowHeight(8),
    width: windowWidth(420),
    shadowOpacity: 0.19,
    marginTop: windowHeight(10),
  },
  loaderImage: {
    height: windowHeight(100),
    width: windowWidth(100),
    resizeMode: 'contain',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
