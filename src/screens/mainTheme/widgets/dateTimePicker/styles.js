import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:appColors.white
      },
      btnView:{
          margin:windowHeight(20),
          backgroundColor:appColors.verticalLine,
          paddingVertical:windowHeight(12),
          alignItems:"center",
          justifyContent:"center",
          borderRadius:windowHeight(4)
      },
      title:{
          color:appColors.fontColor,
          fontFamily:appFonts.MontserratMedium,
          fontSize:fontSizes.FONT20
      }
})