import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import { fontSizes } from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
    image:{
       height:windowHeight(63),
       width:'100%',
       resizeMode:"cover", 
     
    },
    imageStyle:{
        height:windowHeight(120),
        width:windowWidth(130),
        resizeMode:'cover',
        bottom:windowHeight(15),
        
    },
    textContainer:{
        marginHorizontal:windowWidth(20),
        marginBottom:windowHeight(8),
        
    },
    title:{
        fontFamily:appFonts.MontserratMedium,
        fontSize:fontSizes.FONT24,
        color:appColors.nftTitle
    },
    subContent:{
        color:appColors.chatContent,
        fontFamily:appFonts.MontserratRegular,
        fontSize:fontSizes.FONT18HALF,
        marginTop:windowHeight(4)
    }
})