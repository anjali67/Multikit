import {StyleSheet} from 'react-native';
import { windowHeight} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    opacity: 0.03,
  },
  mainView: {
    backgroundColor: appColors.chattingBg,
  },
  image:{
    height:windowHeight(105),
    width:windowHeight(105),
    borderRadius:windowHeight(55)
  },
  title:{
     fontFamily:appFonts.RubikMedium,
     fontSize:fontSizes.FONT20HALF,
     color:appColors.chatText,
     textAlign:"center",
     marginTop:windowHeight(8)
  },
  main:{
    marginTop:windowHeight(30)
  },
  time:{
    color:appColors.chatContent,
    fontFamily:appColors.RubikRegular,
    fontSize:fontSizes.FONT20,
    textAlign:"center",
    
  }
});
