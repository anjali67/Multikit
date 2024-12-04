import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
    otpTextInput: {
        backgroundColor: appColors.learningInput,
        borderRadius: windowHeight(5),
        width: windowWidth(60),
        height: windowHeight(43),
        borderBottomWidth: 0,
        color: appColors.foodContent,
        fontFamily: appFonts.LatoRegular,
        borderBottomColor: appColors.white,
      },
      row: {
        flexDirection: 'row',
        marginHorizontal: windowWidth(20),
      },
    
});
