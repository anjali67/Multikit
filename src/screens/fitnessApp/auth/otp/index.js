import React from 'react';
import {View} from 'react-native';
import AuthBg from '@otherComponent/fitness/authBg';
import Button from '@commonComponents/button/button';
import FitnessTextInput from '@otherComponent/fitness/textInput';
import fitnessStyles from '../../style';
import appColors from '@theme/appColors';
import {useValues} from '@App';
import {t} from 'i18next';

export default function otp({navigation}) {
  const {isDark} = useValues();
  return (
    <View>
      <AuthBg
        subTitle={'nft.verificationCode'}
        content={
          <View style={{marginTop: 30}}>
            <FitnessTextInput placeholder={'fitness.enterCode'} />
            <Button
              text={t('fitness.verifyContinue')}
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
                navigation.navigate('ProgressStepsSlider');
              }}
            />
          </View>
        }
      />
    </View>
  );
}
