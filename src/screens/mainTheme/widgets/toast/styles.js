import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:appColors.white
      },
      contentView:{
          marginTop:windowHeight(30)
      },
      btnView:{
          marginBottom:windowHeight(15),
          backgroundColor:appColors.verticalLine,
          paddingVertical:windowHeight(12),
          alignItems:"center",
          justifyContent:"center",
          borderRadius:windowHeight(4),
          marginHorizontal:windowWidth(20),
         
      },
      title:{
          color:appColors.fontColor,
          fontFamily:appFonts.MontserratMedium,
          fontSize:fontSizes.FONT20
      },
      toastView: {
          backgroundColor: '#F5C2C7',
          flexDirection: 'row',
          height: windowHeight(38),
          width: '60%',
          left: windowWidth(80),
          top: windowHeight(-20),
          borderRadius: windowHeight(10),
          padding: windowHeight(10),
          marginTop: windowWidth(2),
        },
        alertText: {
          color: '#6A1A21',
          fontSize: fontSizes.FONT19,
          fontFamily: appFonts.MontserratRegular,
          marginHorizontal: windowWidth(6),
        },
})