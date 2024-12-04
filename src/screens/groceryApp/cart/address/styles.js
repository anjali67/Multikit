import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: appColors.white,
  },
  loaderView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    width: '100%',
  },
  image: {
    height: '40%',
    width: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: windowHeight(170),
  },
  rowContainer: {
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '78%',
    marginVertical: windowHeight(12),
  },
  boxView: {
    backgroundColor: appColors.white,
    marginHorizontal: windowWidth(20),
    height: windowHeight(20),
    width: windowWidth(30),
    borderRadius: windowHeight(30),
    alignItems: 'center',
    justifyContent: 'center',
  },

  maincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
  },
});
