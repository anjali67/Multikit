import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import { fontSizes } from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:appColors.white
    },
    horizontalLine: {
        borderTopColor: appColors.divider,
        borderTopWidth: 1,
        marginVertical: windowHeight(12),
        marginHorizontal: windowWidth(20),
      },
      contentView:{
        width:windowWidth(450),
        color:appColors.subTitle,
        fontFamily:appFonts.MontserratRegular,
        fontSize:fontSizes.FONT19,
        lineHeight:windowHeight(20),
        marginHorizontal:windowWidth(20)
      }
})