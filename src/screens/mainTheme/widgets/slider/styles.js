import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';

export default styles = StyleSheet.create({
    containentStyle:{
        paddingBottom:60
    },
    mainContainer:{
        flex:1,height:windowHeight(640),alignItems:"center",justifyContent:""
    },
    bottomView:{
        bottom:20,alignItems:"center",justifyContent:"center"
    }
})