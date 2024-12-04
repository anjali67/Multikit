import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import { windowWidth } from '@theme/appConstant';

export default styles = StyleSheet.create({
    margin:{
        marginHorizontal:windowWidth(30)
    },
    btnView:{
        borderRadius:windowHeight(40)
    }
})