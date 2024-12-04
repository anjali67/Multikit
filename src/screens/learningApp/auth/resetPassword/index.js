import React from 'react';
import {View} from 'react-native';
import learningStyle from '../../style';
import AuthBg from '@otherComponent/learning/auth/authBg';
import {t} from 'i18next';
import Input from '@otherComponent/learning/auth/input';
import {windowHeight} from '@theme/appConstant';
import Button from '@otherComponent/learning/auth/button';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function resetPassword({navigation}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        learningStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}>
      <AuthBg
        title={t('learning.resetPassword')}
        subTitle={t('learning.resetPswContent')}
        imageStyle={{height: '32%'}}
        textView={{bottom: windowHeight(39)}}
        content={
          <View style={learningStyle.marginTop}>
            <Input
              label={'learning.newPassword'}
              placeholder={'learning.newPassword'}
            />
            <Input
              label={'learning.confirmNewPassword'}
              placeholder={'learning.confirmNewPassword'}
            />
            <View style={learningStyle.marginTop} />
            <Button
              btnClick={() => {
                navigation.navigate('LearningSignIn');
              }}
              btnTitle={t('learning.submit')}
            />
          </View>
        }
      />
    </View>
  );
}
