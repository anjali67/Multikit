import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default sliderStyles = StyleSheet.create({
  mainView: {
    height: windowHeight(370),
    width: '100%',
    marginTop: windowHeight(12),
  },
  pagination: {
    marginBottom: windowHeight(10),
    backgroundColor: appColors.white,
    width: '25%',
    left: '35%',
    paddingVertical: windowHeight(0.6),
    borderRadius: windowHeight(20),
  },
  dot: {
    width: windowHeight(9),
    height: windowHeight(9),
    borderRadius: windowHeight(4.5),
    margin: windowWidth(3),
    borderColor: appColors.black,
    borderWidth: 1,
  },
  activeDot: {
    backgroundColor: appColors.forgotFont,
    width: windowHeight(32),
    height: windowHeight(7),
    borderRadius: windowHeight(4),
    margin: windowWidth(3),
  },
  container: {
    width: windowWidth(440),
    marginLeft: windowWidth(20),
  },
  img: {
    height: windowHeight(350),
    width: windowWidth(420),
    borderRadius: windowHeight(8),
    resizeMode: 'cover',
  },
  scrollView: {
    overflow: 'visible',
  },
  shopNow: {
    width: windowWidth(134),
    height: windowHeight(30),
    backgroundColor: appColors.primary,
  },
});
