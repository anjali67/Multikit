import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: windowHeight(4),
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  loader: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  image: {
    height: windowHeight(55),
    width: windowWidth(90),
    resizeMode: 'contain',
    borderRadius: windowHeight(4),
  },
  name: {
    marginHorizontal: 20,
    color: appColors.fontColor,
    fontFamily: appFonts.MontserratMedium,
    fontSize: fontSizes.FONT18HALF,
  },
  seperator: {
    width: '100%',
    backgroundColor: appColors.divider,
    alignSelf: 'center',
    height: 1,
    marginBottom:windowHeight(7)
  },
  marginTop:{
    marginTop:2
  }
});
