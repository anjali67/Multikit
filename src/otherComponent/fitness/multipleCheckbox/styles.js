import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import { fontSizes } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import { windowWidth } from '@theme/appConstant';

export default style = StyleSheet.create({
    checkbox:{
        height:windowHeight(17),
        width:windowWidth(23),
        borderRadius:windowHeight(3),
        marginRight:windowWidth(10),
        alignItems:"center",
        justifyContent:"center"
      },
      row:{
        flexDirection:"row",
        marginVertical:windowHeight(4),
        marginHorizontal:windowWidth(20),
        marginBottom:windowHeight(12)
      },
      itemStyle:{
        color:appColors.fontColor,
        fontFamily:appFonts.NunitoSansSemiBold,
        fontSize:fontSizes.FONT19HALF,
        marginHorizontal:windowWidth(6)
      }
})