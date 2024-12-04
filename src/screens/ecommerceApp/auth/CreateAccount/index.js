import {View, Text} from 'react-native';
import React from 'react';
import style from '../SignIn/styles';
import ecommerceStyles from '../../style';
import {t} from 'i18next';
import TextInput from '@otherComponent/ecommerce/auth/textInput';
import AuthBottom from '../authBottom';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@App';

export default function CreateAccount({navigation}) {
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
        <View style={style.blankContainer}></View>
        <Text
          style={[
            style.accountText,
            {color: isDark ? appColors.lightGray : '#3A3A3A'},
          ]}>
          {t('ecommerceAuth.createAccount')}
        </Text>
        <View style={style.mainView}>
          <Text
            style={[
              style.titleStyle,
              style.marginTop,
              {color: isDark ? appColors.ecommerceFont : appColors.bgColor},
            ]}>
            {t('ecommerceAuth.signUp')}
          </Text>
          <TextInput
            label={t('signUp.Full Name')}
            placeholder={t('ecommerceAuth.fullNamePlaceHolder')}
          />
          <TextInput
            label={t('signIn.Email Address')}
            placeholder={t('ecommerceAuth.emailPlaceholder')}
          />
          <TextInput
            label={t('signIn.Password')}
            placeholder={t('ecommerceAuth.passwordPlaceholder')}
          />
          <AuthBottom
            btnTitle={t('signUp.signUp')}
            blankStyle={{height: windowHeight(23)}}
            accountText={t('ecommerceAuth.aleradyAccount')}
            btnStyle={{marginTop: windowHeight(6)}}
            goToScreen={() => {
              navigation.navigate('EcommerceSignIn');
            }}
            goToHomePage={() => {
              navigation.navigate('EcommerceTab');
            }}
          />
        </View>
      </View>
    </View>
  );
}
