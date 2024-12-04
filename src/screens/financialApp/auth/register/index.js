import {View, ScrollView} from 'react-native';
import React from 'react';
import GradientView from '@otherComponent/financial/gradientView';
import AuthHeader from '@otherComponent/financial/auth/authHeader';
import TextInputView from '@otherComponent/financial/auth/textInputView';
import financialStyles from '../../styles';
import {Atsign} from '@assets/images/ecommerce_theme/svg/atsign';
import {t} from 'i18next';
import {FincncePassword} from '@assets/images/ecommerce_theme/svg/password';
import AuthBottom from '../components/authBotton';
import SocialView from '../components/socialView';
import appColors from '@theme/appColors';
import {authBg,darkHome} from '@utils/images/images';
import {useValues} from '@App';

export default function FinanceRegister({navigation}) {
  const {isDark} = useValues();
  return (
    <GradientView
    image={isDark ? darkHome : authBg}
      content={
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <AuthHeader
              title={t('ecommerceAuth.createAccount')}
              subHeading={t('financial.accessYourAccount')}
            />
            <View style={[financialStyles.inputContainer,{backgroundColor:isDark ? appColors.lightWhite : appColors.inputBg}]}>
              <TextInputView
                placeHolder={t('signIn.Email Address')}
                icon={<Atsign />}
              />
              <View style={[financialStyles.divider,{ borderTopColor: isDark ? appColors.lightGray1 : appColors.fontColor}]}></View>
              <TextInputView
                placeHolder={t('signIn.Password')}
                icon={<FincncePassword />}
              />
              <View style={[financialStyles.divider,{ borderTopColor: isDark ? appColors.lightGray1 : appColors.fontColor}]}></View>
              <TextInputView
                placeHolder={t('financial.cPassword')}
                icon={<FincncePassword />}
              />
            </View>
            <AuthBottom
              btnTitle={t('onBoarding.Sign up')}
              goToHomePage={() => {
                navigation.navigate('FinanceVerification');
              }}
              gotoScreen={() => {
                navigation.navigate('FinancialLogin');
              }}
              accountText={t('financial.aleradyAccount')}
              content={t('signUp.signUpWith')}
            />
            <SocialView />
          </ScrollView>
        </>
      }
    />
  );
}
