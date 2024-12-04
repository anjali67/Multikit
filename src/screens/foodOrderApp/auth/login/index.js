import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import AuthHeader from '@otherComponent/food/authHeader';
import {t} from 'i18next';
import FoodTextInput from '@otherComponent/food/textInput';
import foodOrderstyle from '../../style/styles';
import SocialLogin from '../socialLogin';
import {appleLogo, fbLogo, googleLogo} from '@utils/images/images';
import Button from '@commonComponents/button/button';
import {useValues} from '@App';
import appColors from '@theme/appColors';

export default function FoodLogin({navigation}) {
  const {textRTLStyle, viewRTLStyle, isDark} = useValues();
  return (
    <View
      style={[
        foodOrderstyle.mainContainer,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.foodPrimary},
      ]}>
      <AuthHeader
        navigation={navigation}
        title={t('signIn.foodTitle')}
        subTitle={t('signIn.foodContent')}
      />
      <View style={styles.margin}>
        <Text
          style={[
            styles.text,
            {
              textAlign: textRTLStyle,
              color: isDark ? appColors.white : appColors.foodSecondary,
            },
          ]}>
          {t('signIn.phoneNumber')}
        </Text>
        <FoodTextInput
          placeholder={t('signIn.enterPhone')}
          keyboardType={'numeric'}
        />
        <View style={styles.blank}></View>
        <View style={foodOrderstyle.center}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={[
                styles.loginText,
                {color: isDark ? appColors.white : appColors.foodSecondary},
              ]}>
              {t('signIn.loginWith')}
            </Text>
          </TouchableOpacity>
          <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
            <SocialLogin
              tintColor={isDark ? appColors.white : appColors.black}
              image={appleLogo}
            />
            <SocialLogin image={googleLogo} imageStyle={styles.imageStyle} />
            <SocialLogin image={fbLogo} imageStyle={styles.fbImage} />
          </View>
          <View style={styles.blank}></View>
          <Button
            text={t('signIn.Next')}
            style={foodOrderstyle.buttonStyle}
            btnTextStyle={foodOrderstyle.btn}
            onPress={() => {
              navigation.navigate('FoodOtp');
            }}
          />
        </View>
      </View>
    </View>
  );
}
