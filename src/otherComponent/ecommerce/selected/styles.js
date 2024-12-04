import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';


export default styles = StyleSheet.create({

    selectView: {
        backgroundColor:appColors.forgotFont,
        paddingHorizontal: windowHeight(3),
        position: 'absolute',
        top: 0,
        paddingVertical: windowHeight(3),
        right: 0
    },
    selectLeft: {
        borderTopEndRadius: windowHeight(5),
        borderBottomStartRadius: windowHeight(5),
    },
    selectRight: {
        borderTopStartRadius: windowHeight(5),
        borderBottomEndRadius: windowHeight(5),
    },
})