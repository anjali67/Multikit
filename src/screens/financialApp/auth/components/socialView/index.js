import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../styles/styles';
import {useValues} from '@App';
import {appleLogo, fbLogo, googleLogo} from '@utils/images/images';
import SocialLogin from '../../../../foodOrderApp/auth/socialLogin';
import appColors from '@theme/appColors';

export default function SocialView() {
  const {isRTL, setIsRTL, textRTLStyle, viewRTLStyle, isDark, setIsDark} =
    useValues();
  return (
    <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
      <SocialLogin
        tintColor={isDark ? appColors.black : appColors.appleBg}
        image={appleLogo}
        boxContainer={[styles.boxContainer,{backgroundColor: isDark ? appColors.lightBorder :  appColors.financeBg}]}
      />
      <SocialLogin 
        image={googleLogo}
        imageStyle={styles.imageStyle}
        boxContainer={[styles.boxContainer,{backgroundColor: isDark ? appColors.lightBorder :  appColors.financeBg}]}
      />
      <SocialLogin
        image={fbLogo}
        imageStyle={styles.imageStyle}
        boxContainer={[styles.boxContainer,{backgroundColor: isDark ? appColors.lightBorder :  appColors.financeBg}]}
      />
    </View>
  );
}
