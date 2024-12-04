import React from 'react';
import {View} from 'react-native';
import AuthBg from '@otherComponent/fitness/authBg';
import FitnessTextInput from '@otherComponent/fitness/textInput';
import Button from '@commonComponents/button/button';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import fitnessStyles from '../../style';
import {t} from 'i18next';
import AuthBottom from '@otherComponent/fitness/authBottom';

export default function signUp({navigation}) {
  const {isDark} = useValues();
  return (
    <View>
      <AuthBg
        subTitle={'fitness.signUpTitle'}
        content={
          <View style={{marginTop: 30}}>
            <FitnessTextInput placeholder={'signUp.Full Name'} />
            <FitnessTextInput placeholder={'fitness.emailPhonePlaceholder'} />
            <FitnessTextInput placeholder={'fitness.enterPassword'} />
            <Button
              text={t('onBoarding.Sign up')}
              style={[
                fitnessStyles.buttonStyle,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.white,
                },
              ]}
              btnTextStyle={[
                fitnessStyles.btn,
                {color: isDark ? appColors.white : appColors.fontColor},
              ]}
              onPress={() => {
                navigation.navigate('FitnessSignIn');
              }}
            />
            <AuthBottom
              onBtnPress={() => {
                navigation.navigate('FitnessSignIn');
              }}
              createNowText={'fitness.createNowText'}
              subText={'fitness.signIn'}
            />
          </View>
        }
      />
    </View>
  );
}
