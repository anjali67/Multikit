import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default recentSearchStyles = StyleSheet.create({
  progressContainer: {
    height: windowHeight(4),
    backgroundColor: appColors.progress,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
    width: windowWidth(180),
    margin: windowHeight(7),
  },
  progressBar: {
    height: '100%',
    backgroundColor: appColors.forgotFont,
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(30),
  },
  rate: {
    color: '#A3A3A3',
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT20,
  },
  container: {
    position: 'absolute',
    width: windowWidth(210),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    bottom: 3,
    fontSize: fontSizes.FONT16,
  },
  imageStyle: {
    height: windowHeight(10),
    width: windowWidth(229),
    resizeMode: 'stretch',
    left: 10,
  },
});
