import React, {useState} from 'react';
import {View, Text} from 'react-native';
import learningStyle from '../../style';
import AuthBg from '@otherComponent/learning/auth/authBg';
import {t} from 'i18next';
import {windowHeight} from '@theme/appConstant';
import Button from '@otherComponent/learning/auth/button';
import OTPTextInput from 'react-native-otp-textinput';
import {useValues} from '@App';
import styles from './styles';
import appColors from '@theme/appColors';

export default function otp({navigation}) {
  const {textRTLStyle, isDark} = useValues();
  const inputCount = 6;
  return (
    <View
      style={[
        learningStyle.container,
        {backgroundColor: isDark ? appColors.darkPrimary : appColors.white},
      ]}>
      <AuthBg
        title={t('financial.enterOtp')}
        subTitle={t('learning.otpContent')}
        imageStyle={{height: '35.9%'}}
        textView={{bottom: windowHeight(39)}}
        content={
          <View style={learningStyle.textView}>
            <View style={{marginTop: windowHeight(10)}}></View>
            <Text
              style={[
                learningStyle.title,
                {
                  textAlign: textRTLStyle,
                  color: isDark ? appColors.white : appColors.learningBtn,
                },
              ]}>
              {t('financial.enterOtp')}
            </Text>
            <OTPTextInput
              textInputStyle={[
                styles.otpTextInput,
                {
                  textalign: textRTLStyle,
                  backgroundColor: isDark
                    ? appColors.blackColor
                    : appColors.learningInput,
                },
              ]}
              offTintColor="white"
              inputCount={inputCount}
            />

            <View style={learningStyle.marginTop} />
            <Button
              btnClick={() => {
                navigation.navigate('LearningDrawer');
              }}
              btnTitle={t('learning.submit')}
            />
          </View>
        }
      />
    </View>
  );
}
