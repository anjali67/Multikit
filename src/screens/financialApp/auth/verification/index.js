import {View, Text} from 'react-native';
import React from 'react';
import GradientView from '@otherComponent/financial/gradientView';
import AuthHeader from '@otherComponent/financial/auth/authHeader';
import {authBg,darkHome} from '@utils/images/images';
import {t} from 'i18next';
import TextInputView from '@otherComponent/financial/auth/textInputView';
import financialStyles from '../../../financialApp/styles';
import {useValues} from '@App';
import Button from '@commonComponents/button/button';
import styles from '../styles/styles';
import appColors from '@theme/appColors';

export default function financeVerification({navigation}) {
  const {textRTLStyle, isDark} = useValues();
  return (
    <GradientView
      image={isDark ? darkHome : authBg}
      content={
        <>
          <AuthHeader
            title={t('financial.verification')}
            subHeading={t('financial.verifyContent')}
          />
          <View style={[financialStyles.inputContainer,{ backgroundColor: isDark ? appColors.financeDarkBg : appColors.inputBg,}]}>
            <TextInputView placeHolder={t('financial.enterOtp')} />
          </View>
          <View style={financialStyles.center}>
            <Button
              text={t('otp.Continue')}
              style={
                financialStyles.btnStyle

              
              }
              btnTextStyle={[
                financialStyles.btn,
                {color: isDark ? appColors.white : appColors.gray},
              ]}
              onPress={() => {
                navigation.navigate('FinanceAddCard');
              }}
            />
            <Text style={[styles.forgotText, styles.marginTop]}>
              {t('financial.resendCode')}
            </Text>
          </View>
        </>
      }
    />
  );
}
