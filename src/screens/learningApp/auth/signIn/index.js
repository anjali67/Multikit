import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import learningStyle from '../../style';
import AuthBg from '@otherComponent/learning/auth/authBg';
import {t} from 'i18next';
import Input from '@otherComponent/learning/auth/input';
import {useValues} from '@App';
import appColors from '../../../../theme/appColors';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import Button from '@otherComponent/learning/auth/button';
import AuthBottom from '@otherComponent/learning/auth/authBottom';

export default function signIn({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        learningStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}>
      <AuthBg
        title={t('ecommerceAuth.title')}
        subTitle={t('learning.loginContent')}
        content={
          <View style={style.marginTop}>
            <Input
              label={'signUp.Full Name'}
              placeholder={'learning.enterUsername'}
            />
            <Input label={'signIn.Password'} placeholder={'signIn.Password'} />
            <View style={style.forgotView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LearningForgotPassword');
                }}
                activeOpacity={0.9}>
                <Text
                  style={[
                    style.forgotText,
                    {
                      color: isDark
                        ? appColors.white
                        : appColors.learningPlaceholder,
                    },
                  ]}>
                  {t('signIn.Forgot password?')}
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              btnClick={() => {
                navigation.navigate('LearningOtp');
              }}
              btnTitle={t('onBoarding.signIn')}
            />
            <AuthBottom
              createNowText={'signIn.createNow'}
              signTxt={'learning.continueWith'}
              onBtnClick={() => {
                navigation.navigate('LearningSignUp');
              }}
            />
          </View>
        }
      />
    </View>
  );
}

const style = StyleSheet.create({
  forgotView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

    marginHorizontal: windowWidth(22),
    marginBottom: windowHeight(8),
  },
  forgotText: {
    fontSize: fontSizes.FONT17HALF,
    fontFamily: appFonts.InterSemiBold,
    color: appColors.fontColor,
    marginTop: windowHeight(7),
    marginBottom: windowHeight(8),
  },
  marginTop: {
    marginTop: windowHeight(11),
  },
});
