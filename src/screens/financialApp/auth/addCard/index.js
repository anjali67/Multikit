import {View, TextInput} from 'react-native';
import React from 'react';
import AuthHeader from '@otherComponent/financial/auth/authHeader';
import {authBg,darkHome} from '@utils/images/images';
import {t} from 'i18next';
import GradientView from '@otherComponent/financial/gradientView';
import financialStyles from '../../../financialApp/styles';
import TextInputView from '@otherComponent/financial/auth/textInputView';
import styles from '../styles/styles';
import appColors from '@theme/appColors';
import Button from '@commonComponents/button/button';
import {useValues} from '@App';

export default function financeAddCard({navigation}) {
  const {isDark, viewRTLStyle, isRTL} = useValues();
  return (
    <GradientView
    image={isDark ? darkHome : authBg}
      content={
        <>
          <AuthHeader
            title={t('financial.addCard')}
            subHeading={t('financial.cardContent')}
          />
          <View style={[financialStyles.inputContainer,{  backgroundColor: isDark ? appColors.financeDarkBg : appColors.inputBg}]}>
            <TextInputView placeHolder={t('financial.cardHolder')} />
            <View style={[financialStyles.divider,{ borderWidth: isDark ? 0.5 : 1}]}></View>
            <TextInputView placeHolder={t('financial.cardNumber')} />
            <View style={[financialStyles.divider,{ borderWidth: isDark ? 0.5 : 1}]}></View>
            <View style={[styles.cardView, {flexDirection: viewRTLStyle}]}>
              <TextInput
                style={[
                  styles.inputStyle,
                  {
                    textAlign: isRTL ? 'right' : 'left',
                  },
                ]}
                placeholder={t('financial.monthhYear')}
                placeholderTextColor={appColors.financeContent}
              />
              <View style={styles.vertical}></View>
              <TextInput
                style={[
                  styles.inputStyle,
                  {textAlign: isRTL ? 'right' : 'left'},
                ]}
                placeholder={t('financial.cvv')}
                placeholderTextColor={appColors.financeContent}
              />
            </View>
          </View>
          <View style={financialStyles.center}>
            <Button
              text={t('financial.addCard')}
              style={
                financialStyles.btnStyle

              }
              btnTextStyle={[
                financialStyles.btn,
                {color: isDark ? appColors.white : appColors.gray},
              ]}
              onPress={() => {
                navigation.navigate('FinanceTab');
              }}
            />
          </View>
        </>
      }
    />
  );
}
