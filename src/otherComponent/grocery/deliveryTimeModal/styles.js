import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import { windowHeight,windowWidth,fontSizes } from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
    column: {
        justifyContent: 'space-between'
    },
    selectView: {
        backgroundColor:'red',
        paddingHorizontal: windowHeight(6),
        position: 'absolute',
        right: 0,
        top: 0,
        borderTopEndRadius: windowHeight(5),
        borderBottomStartRadius: windowHeight(5),
        paddingVertical: windowHeight(3)
    },
    view: {
        width: '48%',
        height: windowHeight(44),
        marginTop: windowHeight(14),
        justifyContent: 'center',
        paddingHorizontal: windowWidth(10),
        borderRadius: windowHeight(6),
        borderWidth: 1,
    },
    txt: {
        fontSize: fontSizes.FONT18,
        color:appColors.groceryBtn,
        fontFamily:appFonts.PublicSansRegular

    },
    buttonStyle:{
        borderColor:appColors.groceryBtn,
        borderWidth:1,
        height:windowHeight(37),
        marginTop:windowHeight(12),
        width:"47%",
        alignItems:"center",
        justifyContent:"center",
        marginLeft:windowWidth(28)
        
    },
    btnTextStyle:{
        fontSize:fontSizes.FONT20,
        fontFamily:appFonts.PublicSansRegular
    },
    ButtonStyle:{
        backgroundColor:appColors.groceryBtn,
        width:"48%",   
        height:windowHeight(37),
        marginTop:windowHeight(12),
        alignItems:"center",
        justifyContent:"center"
    },
    buttonText:{
        fontSize:fontSizes.FONT20,
        fontFamily:appFonts.PublicSansRegular,
        color:appColors.white
        
    },
    title:{
        fontFamily:appFonts.PublicSansRegular,
        fontSize:fontSizes.FONT19,
        marginVertical:windowHeight(2),
        color:appColors.black,
        marginTop:windowHeight(4)
    }
})