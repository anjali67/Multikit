import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import {t} from 'i18next';
import TextInput from '@otherComponent/cabBooking/textInput';
import {uk} from '@utils/images/images';
import cabStyle from '../../style';
import {Edit} from '@assets/images/cab_theme/svg/edit';
import OtpInput from '@otherComponent/cabBooking/otpTextInput';
import BtnView from '@otherComponent/cabBooking/btnView';
import Button from '@commonComponents/button/button';
import appColors from '@theme/appColors';
import {useValues} from '@App';

export default function verifyNumber({navigation}) {
  const {setIsDark, isDark, textRTLStyle} = useValues();
  return (
    <View style={[cabStyle.mainContainer, {backgroundColor: isDark ? appColors.blackColor :  appColors.white}]}>
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.name, {textAlign: textRTLStyle, color: isDark ? appColors.white : appColors.cabText}]}>
            {t('cabBooking.verifyNumber')}
          </Text>
          <Text style={[styles.content, {textAlign: textRTLStyle}]}>
            {t('cabBooking.verifyNumberContent')}
          </Text>
        </View>
        <View style={styles.blanView}></View>
        <TextInput
          placeholder={t('987-654-321')}
          icon={<Edit strokeWidth={1.8} color={appColors.foodContent} />}
          mainContainer={[styles.textInput,{ backgroundColor: isDark ? appColors.darkTheme  : appColors.reviewsBg}]}
          showLeftIcon={true}
          image={uk}
          keyboardType={'numeric'}
        />
        <OtpInput />
        <BtnView
          onBtnPress={() => {
            navigation.navigate('GpsLocation');
          }}
          btnTitle={t('cabBooking.sendCode')}
        />
        <Button
          text={t('cabBooking.resend')}
          style={styles.buttonStyle}
          btnTextStyle={[styles.btn,{ color: isDark ? appColors.white : appColors.cabText}]}
        />
        <Text style={[styles.resendText,{color: isDark ? appColors.white : appColors.foodContent}]}>
          {t('cabBooking.resendCode')}
          <Text style={[styles.time,{ color: isDark ? appColors.gray : appColors.cabText}]}> 0.20</Text>
        </Text>
      </View>
    </View>
  );
}
