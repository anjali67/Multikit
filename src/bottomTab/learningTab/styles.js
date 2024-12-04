import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#0067FF',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  slidingTabContainer: {
    // ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerSlidingTab: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'red',

    alignItems: 'center',
    justifyContent: 'center',
  },
  slidingTab: {
    width: 48,
    height: 48,
    borderRadius: 100,
    backgroundColor: 'blue',
    left: windowWidth(40),
    bottom: windowHeight(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  containerView: {
    height: windowHeight(60),
    // width: '100%',
    backgroundColor: appColors.white,
    elevation: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: windowWidth(10),
    elevation:15
  },
  row: {
    flexDirection: 'row',
    height: windowHeight(65),
    width: '100%',
    alignItems: 'center',
    marginTop: windowHeight(4),
  },
  main: {
    height: 60,
    width: 60,
    backgroundColor: appColors.white,
    borderRadius: 100,
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    left: 30,
  },
  tabView: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: appColors.white,
  },
  label: {
    color: appColors.learningGradiant,
    fontFamily: appFonts.InterMedium,
    fontSize: fontSizes.FONT15,
  },
  gradiant: {
    height: windowHeight(40),
    width: windowHeight(40),
    borderRadius: windowHeight(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
