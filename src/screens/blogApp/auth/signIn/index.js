import React from 'react';
import {View, Text} from 'react-native';
import BackgroundImg from '@otherComponent/blog/background';
import TextInput from '@otherComponent/cabBooking/textInput';
import {Atsign} from '@assets/images/ecommerce_theme/svg/atsign';
import appColors from '@theme/appColors';
import {t} from 'i18next';
import style from '../style';
import {FincncePassword} from '@assets/images/ecommerce_theme/svg/password';
import AuthBottom from '@otherComponent/blog/authBottom';
import {useValues} from '@App';

export default function BlogSignIn({navigation}) {
  const {isDark, textRTLStyle} = useValues();
  return (
    <BackgroundImg
      center={style.bottom}
      content={
        <View>
          <Text
            style={[
              style.title,
              {
                color: isDark ? appColors.black : appColors.white,
                textAlign: textRTLStyle,
              },
            ]}>
            {t('onBoarding.signIn')}
          </Text>
          <TextInput
            mainContainer={[
              style.textInputContainer,
              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.white,
              },
            ]}
            placeholder={t('signIn.Email Address')}
            inputStyle={[
              style.inputStyle,
              {color: isDark ? appColors.white : appColors.fontColor},
            ]}
            icon={<Atsign strokeWidth={1.8} color={appColors.subTitle} />}
          />
          <TextInput
            mainContainer={[
              style.textInputContainer,
              {
                backgroundColor: isDark
                  ? appColors.blackColor
                  : appColors.white,
              },
            ]}
            placeholder={t('signIn.Password')}
            icon={
              <FincncePassword strokeWidth={1.8} color={appColors.subTitle} />
            }
            inputStyle={[
              style.inputStyle,
              {color: isDark ? appColors.white : appColors.fontColor},
            ]}
          />
          <AuthBottom
            showForgotPassword={true}
            btnTitle={'onBoarding.signIn'}
            createNowText={'signIn.createNow'}
            onBtnPress={() => {
              navigation.navigate('BlogSignUp');
            }}
            onBtnClick={() => {
              navigation.navigate('ChooseTopic');
            }}
          />
        </View>
      }
    />
  );
}
