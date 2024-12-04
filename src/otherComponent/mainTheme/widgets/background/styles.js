import {StyleSheet} from 'react-native';
import { windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bg:{
        height:windowHeight(200),
        width:windowWidth(100),
        resizeMode:"contain",       
    },
    mainContainer:{
        height: windowHeight(165),
        backgroundColor: appColors.green,
        width: windowWidth(480),
    },
    innerContainer:{
        position:"absolute",
       
    },
    imageStyle:{
      height:windowHeight(660),
      width:windowWidth(180),
      resizeMode:"contain",
     

    }
 

})