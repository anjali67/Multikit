import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:appColors.chattingBg
    },
    image:{
        height:'63%',
        width:'100%',
        resizeMode:'stretch',
        
    },
    outerContainer:{
        flex:1
    },
    innerContainer:{
        position:"absolute"
    }
})