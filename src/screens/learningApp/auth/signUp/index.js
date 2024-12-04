import React from 'react';
import {View, StyleSheet} from 'react-native';
import learningStyle from '../../style';
import AuthBg from '@otherComponent/learning/auth/authBg';
import {t} from 'i18next';
import Input from '@otherComponent/learning/auth/input';
import {useValues} from '@App';
import {windowHeight} from '@theme/appConstant';
import Button from '@otherComponent/learning/auth/button';
import AuthBottom from '@otherComponent/learning/auth/authBottom';
import appColors from '@theme/appColors';

export default function SignUp({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        learningStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}>
      <AuthBg
        title={t('ecommerceAuth.signUp')}
        subTitle={t('learning.signupContent')}
        imageStyle={{height: '26%'}}
        textView={{height: windowHeight(155)}}
        content={
          <View style={style.marginTop}>
            <Input
              label={'signUp.Full Name'}
              placeholder={'hotelBooking.enterName'}
            />
            <Input
              label={'chatting.email'}
              placeholder={'hotelBooking.enterEmail'}
            />
            <Input label={'signIn.Password'} placeholder={'signIn.Password'} />
            <View style={style.marginTop} />
            <Button   btnClick={() => {
                navigation.navigate('LearningDrawer');
              }}
               btnTitle={t('signUp.signUp')} />
            <AuthBottom
              createNowText={'financial.aleradyAccount'}
              signTxt={'learning.continueWith'}
              onBtnClick={() => {
                navigation.navigate('LearningSignIn');
              }}
            />
          </View>
        }
      />
    </View>
  );
}

const style = StyleSheet.create({
  marginTop: {
    marginTop: windowHeight(8),
  },
});
