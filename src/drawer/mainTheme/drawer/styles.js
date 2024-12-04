import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '../../../theme/appColors';
import appFonts from '../../../theme/appFonts';
import { fontSizes } from '../../../theme/appConstant';


export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:appColors.white
    },
    imageStyle:{
        height:windowHeight(85),
        width:windowWidth(180),
        resizeMode:"contain",
        marginBottom:windowHeight(30)
    },
    center:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:windowHeight(30)

    },
    image:{
        height:windowHeight(23),
        width:windowWidth(43),
        resizeMode:"contain",
        marginRight:windowWidth(10)
    },
    row:{
        flexDirection:"row",
        marginBottom:windowHeight(20),
        marginHorizontal:windowWidth(20),
        justifyContent:"space-between"
    },
    name:{
        color:appColors.fontColor,
        fontFamily:appFonts.MontserratRegular,
        fontSize:fontSizes.FONT18,
        marginTop:3
    },
    rowContainer:{
        flexDirection:"row"
    }
 
});
