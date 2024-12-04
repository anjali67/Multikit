import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: appColors.white,
  },
  progressContainer: {
    backgroundColor: appColors.white,
    height: windowHeight(87),
    elevation: 3,
  },
  progressIndicatorContainer: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(10),
    marginTop: 8,
    alignItems: 'center',
  },
  indicator: {
    height: windowHeight(3.5),
    borderRadius: windowHeight(3),
    backgroundColor: '#E2E2E2',
    width: windowWidth(80),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  currentIndicator: {
    backgroundColor: '#4466F2',
    height: windowHeight(3.5),
  },
  indicatorText: {
    color: 'white',
    fontWeight: 'bold',
  },
  progressBar: {
    height: 4,
    backgroundColor: 'blue',
    marginTop: 5,
  },
  stepContainer: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  buttonContainer: {
    flex: 1,
    bottom: windowHeight(20),
    position: 'absolute',
  },

  border: {
    height: windowHeight(11.8),
    width: '100%',
    backgroundColor: appColors.reviewsBg,
  },
  textStyle: {
    color: appColors.fontColor,
    fontFamily: appFonts.NunitoSansSemiBold,
    fontSize: fontSizes.FONT21HALF,
    right: windowWidth(3),
    margin: 5,
  },
  margin: {
    margin: windowHeight(20),
  },
  title: {
    color: appColors.fontColor,
    fontFamily: appFonts.NunitoSansBold,
    fontSize: fontSizes.FONT22,
  },
  content: {
    marginTop: windowHeight(3),
    color: appColors.chatContent,
    fontFamily: appFonts.NunitoSansSemiBold,
    fontSize: fontSizes.FONT18,
  },
});
