import {StyleSheet} from 'react-native';
import appColors from '../../../../../theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  image: {
    width: '180%',
    height: windowHeight(200),
    resizeMode: 'contain',
    top: windowHeight(20),
  },
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  rowContainer: {
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: windowHeight(12),
  },
  boxView: {
    backgroundColor: appColors.white,
    marginHorizontal: windowWidth(20),
    height: windowHeight(26),
    width: windowWidth(40),
    borderRadius: windowHeight(50),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.category,
    padding: windowHeight(90),
    paddingVertical: windowHeight(24),
    width: '86.4%',
    borderBottomRightRadius: windowHeight(16),
  },
  mainRow: {
    flexDirection: 'row',
    width: '73%',
    justifyContent: 'flex-end',
    marginVertical: windowHeight(6),
  },
  imageStyle: {
    width: windowWidth(65),
    height: windowHeight(55),
    resizeMode: 'contain',
  },
  imageContainer: {
    backgroundColor: appColors.white,
    height: windowHeight(50),
    width: windowWidth(75),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0.8,
    borderRadius: windowHeight(5),
  },
});
