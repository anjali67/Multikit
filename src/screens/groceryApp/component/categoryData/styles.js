import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
    scrollView: {
        paddingVertical: windowHeight(4),
        marginHorizontal: windowWidth(15),
      },
      container: {
        alignItems: 'center',
        flexDirection:"row",  
         backgroundColor: appColors.category,
         paddingHorizontal: windowWidth(28),
         justifyContent: 'center',
         borderRadius: windowWidth(26),
         marginHorizontal: windowWidth(8),
         paddingVertical:windowHeight(7)
      },
      image: {
        width: windowWidth(45),
        height: windowHeight(20),
        resizeMode: 'contain',
      },
      title: {
        marginHorizontal: windowWidth(8),
        fontSize: fontSizes.FONT17,
        color: appColors.black,
        fontFamily: appFonts.PublicSansMedium,
        marginTop:windowHeight(2),
        textAlign:"center"
      },
      titleStyle:{
       
            marginHorizontal: windowHeight(20),
            marginTop: windowHeight(15),
            marginBottom: windowHeight(7),
            fontSize: fontSizes.FONT19,
            color: appColors.black,
            fontFamily: appFonts.PublicSansSemiBold,
         
      }
})   