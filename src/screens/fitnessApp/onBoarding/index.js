import React from 'react';
import {View} from 'react-native';
import AuthBg from '@otherComponent/fitness/authBg';
import Button from '@commonComponents/button/button';
import fitnessStyles from '../style';
import {useValues} from '@App';
import {t} from 'i18next';
import appColors from '@theme/appColors';
import styles from './styles';

export default function onBoarding({navigation}) {
  const {isDark} = useValues();
  return (
    <View>
      <AuthBg
        subTitle={t('fitness.onBoardingContent')}
        content={
          <View>
            <Button
              text={t('onBoarding.Sign up')}
              style={[
                fitnessStyles.buttonStyle,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.white,
                },
                styles.btnView,
              ]}
              btnTextStyle={[
                fitnessStyles.btn,
                {color: isDark ? appColors.white : appColors.fontColor},
              ]}
              onPress={() => {
                navigation.navigate('FitnessSignUp');
              }}
            />
            <Button
              text={t('onBoarding.signIn')}
              style={fitnessStyles.loginStyle}
              btnTextStyle={fitnessStyles.loginBtn}
              onPress={() => {
                navigation.navigate('FitnessSignIn');
              }}
            />
          </View>
        }
      />
    </View>
  );
}
