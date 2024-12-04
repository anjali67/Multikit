import {StyleSheet} from 'react-native';
import {windowHeight,windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
    container:{
        flex:1,
      margin:20
    },
    inputStyle:{
        height:windowHeight(45),
        width:'100%',
        backgroundColor:appColors.bgColor,
        paddingLeft:windowWidth(20),
        borderRadius:windowHeight(3),
        fontFamily:appFonts.MontserratRegular,
        fontSize:fontSizes.FONT19HALF,
        marginBottom:windowHeight(10)
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:appColors.bgColor,
        marginVertical:windowHeight(4),
        padding:windowHeight(10)
    }
})