import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import foodOrderstyle from '../../style/styles';
import AuthHeader from '@otherComponent/food/authHeader';
import {t} from 'i18next';
import styles from './styles';
import OTPTextInput from 'react-native-otp-textinput';
import Button from '@commonComponents/button/button';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function FoodOtp({navigation}) {
  const {viewRTLStyle, textRTLStyle, isDark, isRTL} = useValues();
  const inputCount = 5;
  return (
    <View style={[foodOrderstyle.mainContainer,{backgroundColor:isDark ? appColors.darkTheme : appColors.foodPrimary}]}>
      <View style={styles.mainView}>
        <View>
          <AuthHeader
            title={t('otp.verifyNumber')}
            subTitle={t('otp.otpContent')}
            navigation={navigation}
          />
          <View>
            <OTPTextInput
              textInputStyle={[styles.otpTextInput, {textalign: textRTLStyle,backgroundColor:isDark ? appColors.blackColor : appColors.white}]}
              offTintColor="white"
              inputCount={inputCount}
              selectionColor="gray"
              containerStyle={styles.row}
            />
            <View style={styles.textContainer}>
              <Text style={styles.otpText}>{t('otp.otpProblem')} </Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.resand}>{t('otp.resend')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.center}>
          <Button
            text={t('otp.Continue')}
            style={foodOrderstyle.buttonStyle}
            btnTextStyle={foodOrderstyle.btn}
            onPress={() => {
              navigation.navigate('FoodLocation');
            }}
          />
        </View>
      </View>
    </View>
  );
}
