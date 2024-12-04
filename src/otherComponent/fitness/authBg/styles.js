import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  containerView: {
    position: 'absolute',
    bottom: windowHeight(30),
    marginHorizontal: windowWidth(20),
  },
  vertical: {
    height: '72%',
    width: windowWidth(6),
    backgroundColor: '#4466F2',
    marginTop: windowHeight(5),
    marginRight: windowWidth(16),
    marginLeft: windowWidth(2),
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    color: appColors.white,
    fontFamily: appFonts.RowdiesRegular,
    fontSize: fontSizes.FONT40,
    
  },
  content: {
    color: appColors.fitnessContent,
    fontFamily: appFonts.RowdiesLight,
    fontSize: fontSizes.FONT32,
    bottom:windowHeight(13)

  },
  mainViewContainer: {
    width: windowWidth(100),
    backgroundColor: 'red',
    height: windowHeight(50),
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
