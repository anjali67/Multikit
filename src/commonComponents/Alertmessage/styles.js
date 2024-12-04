import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
    main: {
      // position: 'absolute',
      width: '100%',
      backgroundColor: 'red',
    },
    content: {
      width: '94%',
      opacity: 0.9,
      backgroundColor: 'gray',
      position: 'absolute',
      alignSelf: 'center',
      borderRadius: 10,
      padding: 10,
      alignItems: 'flex-start',
    },
    generated: {
      // fontFamily: appFonts.OutfitBlack,
      // fontSize: fontSizes.FONT4,
      paddingTop: 2,
      color: 'black',
    },
    loading: {
      // fontFamily: appFonts.OutfitMedium,
      // fontSize: fontSizes.FONT3HALF,
      paddingVertical: windowHeight(1),
      color: 'blue',
    },
  });