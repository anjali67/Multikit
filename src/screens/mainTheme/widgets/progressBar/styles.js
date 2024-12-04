import {StyleSheet} from 'react-native';
import {windowHeight,windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
    containerStyle: {
        width: windowWidth(410),
        marginHorizontal: windowWidth(0),
        right: windowWidth(6),
        marginTop: windowHeight(7),
      },
      progressStyle: {
        width: windowWidth(410),
        marginHorizontal: windowWidth(0),
        right: windowWidth(6),
        marginTop: windowHeight(7),
        backgroundColor: appColors.divider,
        height: windowHeight(12),
      },
      innerProgressStyle: {
        backgroundColor: appColors.green,
        borderRadius: windowHeight(10),
        alignItems: 'center',
        justifyContent: 'center',
      },
      marginBottom: {
        marginBottom: windowHeight(20),
      },
      textStyle: {
        marginHorizontal: 20,
        color: appColors.subTitle,
        fontFamily: appFonts.MontserratMedium,
      },
})