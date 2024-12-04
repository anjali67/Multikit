import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
    paymentText:{
        fontFamily:appFonts.MontserratMedium,
        marginTop:windowHeight(2)
      },
      container:{
        marginTop:windowHeight(8)
      },
      titleStyle:{
        fontFamily:appFonts.MontserratMedium,
      },
      mainStyle:{
        backgroundColor:appColors.bgColor,
        borderRadius:windowHeight(5),
        paddingHorizontal:windowHeight(12),
        paddingVertical:windowHeight(8),
      },
      mainView:{
        paddingVertical:windowHeight(1),
        paddingHorizontal:windowWidth(45)
      },
      cartText:{
        marginTop:windowHeight(5)
      },
      scrollView:{
        paddingBottom:windowHeight(27)
      },
      blankView:{
        height:windowHeight(34)
      }
})