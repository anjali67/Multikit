import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import AuthBg from '@otherComponent/fitness/authBg';
import FitnessTextInput from '@otherComponent/fitness/textInput';
import Button from '@commonComponents/button/button';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import fitnessStyles from '../../style';
import {t} from 'i18next';
import AuthBottom from '@otherComponent/fitness/authBottom';
import styles from '../styles';

export default function signIn({navigation}) {
  const {isDark} = useValues();
  return (
    <View>
      <AuthBg
        subTitle={'fitness.signInTitle'}
        content={
          <View style={{marginTop: 30}}>
            <FitnessTextInput placeholder={'fitness.enterEmail'} />
            <FitnessTextInput placeholder={'fitness.enterPassword'} />
            <View style={styles.forgotView}>
              <TouchableOpacity activeOpacity={0.7}>
                <Text
                  style={[
                    styles.forgotText,
                    {color: isDark ? appColors.white : appColors.white},
                  ]}>
                  {t('signIn.Forgot password?')}
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              text={t('onBoarding.signIn')}
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
                navigation.navigate('FitnessOtp');
              }}
            />
            <AuthBottom
              onBtnPress={() => {
                navigation.navigate('FitnessSignUp');
              }}
              createNowText={'fitness.signupAccountText'}
              subText={'ecommerceAuth.createAccount'}
            />
          </View>
        }
      />
    </View>
  );
}
