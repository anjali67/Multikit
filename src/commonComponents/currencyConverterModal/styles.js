import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '../../theme/appColors';
import appFonts from '../../theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.FONT21,
        fontFamily:appFonts.MontserratMedium,
        color:appColors.fontColor
    },
    icon: {
        alignItems: 'center',
        marginTop: windowHeight(10)
    },
    modal: {
        padding: windowWidth(20),
        borderTopStartRadius: windowWidth(20),
        borderTopEndRadius: windowWidth(20),
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 1,
      },
})