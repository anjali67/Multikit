import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import GradientView from '@otherComponent/financial/gradientView';
import AuthHeader from '@otherComponent/financial/auth/authHeader';
import TextInputView from '@otherComponent/financial/auth/textInputView';
import financialStyles from '../../styles';
import {Atsign} from '@assets/images/ecommerce_theme/svg/atsign';
import {t} from 'i18next';
import {FincncePassword} from '@assets/images/ecommerce_theme/svg/password';
import styles from '../styles/styles';
import AuthBottom from '../components/authBotton';
import {useValues} from '@App';
import SocialView from '../components/socialView';
import {authBg, darkHome} from '@utils/images/images';
import appColors from '@theme/appColors';

export default function financialLogin({navigation}) {
  const {isDark} = useValues();
  return (
    <GradientView
      image={isDark ? darkHome : authBg}
      content={
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <AuthHeader
              title={t('onBoarding.signIn')}
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
            </View>
            <View style={styles.forgotView}>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.forgotText}>
                  {t('signIn.Forgot password?')}
                </Text>
              </TouchableOpacity>
            </View>
            <AuthBottom
              btnTitle={t('onBoarding.signIn')}
              goToHomePage={() => {
                navigation.navigate('FinanceVerification');
              }}
              gotoScreen={() => {
                navigation.navigate('FinanceRegister');
              }}
              accountText={t('signIn.createNow')}
              content={t('signIn.signInWith')}
            />
            <SocialView />
          </ScrollView>
        </>
      }
    />
  );
}
