import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
    text: {
        marginTop:windowHeight(10),
        fontFamily: appFonts.LatoSemibold,
        color: appColors.foodSecondary,
        fontSize: fontSizes.FONT22,
        marginHorizontal: windowWidth(20),
      },
      center:{
        marginHorizontal:20,alignItems:"center",justifyContent:"center"
      },
      inputStyle: {
        width: windowWidth(440),
        marginBottom: windowHeight(15),
        
      },
})