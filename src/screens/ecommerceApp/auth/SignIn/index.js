import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ecommerceStyles from '../../style';
import {t} from 'i18next';
import styles from './styles';
import TextInput from '@otherComponent/ecommerce/auth/textInput';
import AuthBottom from '../authBottom';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function EcommerceSignIn({navigation}) {
  const {textRTLStyle, isDark} = useValues();
  return (
    <View
      style={[
        ecommerceStyles.mainContainer,
        {
          backgroundColor: isDark
            ? appColors.white
            : appColors.ecommorcePrimary,
        },
      ]}>
      <View>
        <View style={styles.blankView}></View>
        <Text
          style={[
            styles.heading,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.lightGray : '#3A3A3A',
            },
          ]}>
          {t('ecommerceAuth.welcome')}
        </Text>
        <View style={styles.mainView}>
          <Text
            style={[
              styles.titleStyle,
              {
                textAlign: textRTLStyle,
                color: isDark ? appColors.ecommerceFont : appColors.bgColor,
              },
            ]}>
            {t('ecommerceAuth.title')}
          </Text>
          <TextInput
            label={t('signIn.Email Address')}
            placeholder={t('ecommerceAuth.emailPlaceholder')}
          />
          <TextInput
            label={t('signIn.Password')}
            placeholder={t('ecommerceAuth.passwordPlaceholder')}
          />
          <View style={styles.forgotView}>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.forgotText}>
                {t('signIn.Forgot password?')}
              </Text>
            </TouchableOpacity>
          </View>
          <AuthBottom
            btnTitle={t('ecommerceOnBoarding.login')}
            accountText={t('ecommerceAuth.donthaveAccount')}
            goToScreen={() => {
              navigation.navigate('CreateAccount');
            }}
            goToHomePage={() => {
              navigation.navigate('EcommerceDrawer');
            }}
          />
        </View>
      </View>
    </View>
  );
}
