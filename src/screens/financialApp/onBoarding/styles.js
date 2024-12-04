import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import {windowHeight} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import {windowWidth} from '@theme/appConstant';

export default Styles = StyleSheet.create({
  imageStyle: {
    height: windowHeight(120),
    width: windowWidth(490),
    resizeMode: 'contain',
    marginTop: windowHeight(120),
    right:windowWidth(8)
  },
  mainContainer: {
    height: windowHeight(90),
    width: windowWidth(200),
  },
  card: {
    height: windowHeight(220),
    width: windowWidth(350),
    resizeMode: 'contain',
    top: windowHeight(-90),
  },
  card1: {
    height: windowHeight(180),
    width: windowWidth(350),
    resizeMode: 'contain',
    top: windowHeight(-160),
  },

  blankView: {
    height: windowHeight(170),
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: windowHeight(140),
  },
  textView: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    color: appColors.financeContent,
    fontFamily: appFonts.InterRegular,
    fontSize: fontSizes.FONT21HALF,
    marginVertical: windowHeight(5),
    textAlign: 'center',
    width: windowWidth(420),
    lineHeight: windowHeight(22),
    height: windowHeight(130),
  },
  title: {
    fontSize: fontSizes.FONT25,
    color: appColors.gray,
    fontFamily: appFonts.InterRegular,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
  mainCardView: {
    height: windowHeight(470),
  },
  paginationView: {
    height: windowHeight(60),
    marginTop: windowHeight(10),
  },
  imageContainer: {
    marginHorizontal: windowWidth(70),
    top: windowHeight(-40),
  },
  margin: {
    marginHorizontal: windowWidth(40),
  },
});
