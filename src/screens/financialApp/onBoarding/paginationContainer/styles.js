import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '../../../../theme/appColors';

export default styles = StyleSheet.create({
  dotContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  dotStyles: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  constainerStyles: {
    top: 30,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginTop: 40,
    marginHorizontal: 40,
    borderRadius: 20,
  },
  text: {
    flex: 1,
  },
  inactiveDot: {
    backgroundColor: 'red',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
