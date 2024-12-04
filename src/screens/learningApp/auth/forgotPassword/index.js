import React from 'react';
import {View} from 'react-native';
import learningStyle from '../../style';
import AuthBg from '@otherComponent/learning/auth/authBg';
import {t} from 'i18next';
import Input from '@otherComponent/learning/auth/input';
import Button from '@otherComponent/learning/auth/button';
import style from '../../style';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function forgotPassword({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        learningStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}>
      <AuthBg
        title={t('signIn.Forgot password?')}
        subTitle={t('learning.forgotPswContent')}
        imageStyle={{height: '42.5%'}}
        content={
          <View style={style.marginTop}>
            <Input
              label={'chatting.email'}
              placeholder={'hotelBooking.enterEmail'}
            />
            <View style={style.marginTop} />
            <Button
              btnClick={() => {
                navigation.navigate('LearningResetPassword');
              }}
              btnTitle={t('learning.submit')}
            />
          </View>
        }
      />
    </View>
  );
}
