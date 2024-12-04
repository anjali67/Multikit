import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import { fontSizes } from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
    container:{
        backgroundColor:appColors.grayLight,
        flexDirection:"row",
        marginHorizontal:windowHeight(15),
         marginVertical:windowHeight(7),
        alignItems:"center",
        paddingHorizontal:windowWidth(20),
        height:windowHeight(55),
        borderRadius:windowHeight(4),
        marginTop:windowHeight(10),
    },
    textView:{
        marginHorizontal:windowWidth(14),
        marginTop:windowHeight(8)
    },
    textInput:{
        paddingVertical:windowHeight(0),
       width:windowWidth(380),
       fontFamily:appFonts.MontserratRegular,
       fontSize:fontSizes.FONT17,
       bottom:windowHeight(2)
    },
    label:{
        fontFamily:appFonts.MontserratRegular,
        color:appColors.nftTitle,
        fontSize:fontSizes.FONT19HALF

    }
})