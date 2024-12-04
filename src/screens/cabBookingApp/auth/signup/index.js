import React from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import cabStyle from '../../style';
import TextInput from '@otherComponent/cabBooking/textInput';
import {t} from 'i18next';
import {Atsign} from '@assets/images/ecommerce_theme/svg/atsign';
import appColors from '@theme/appColors';
import {UserProfileImg} from '../../../../assets/images/hotel_theme/svg/user';
import {FincncePassword} from '@assets/images/ecommerce_theme/svg/password';
import BtnView from '@otherComponent/cabBooking/btnView';
import AuthBottom from '@otherComponent/grocery/authBottom';
import {useValues} from '@App';
import SocialBtn from '../../../hotelBookingApp/auth/socialBtn';
import {cabDivider} from '@utils/images/images';
import styles from '../styles';

export default function cabSignup({navigation}) {
  const {isDark} = useValues();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      style={[cabStyle.mainContainer, {backgroundColor: isDark ? appColors.blackColor : appColors.white}]}>
      <View>
        <TextInput
          placeholder={t('signUp.Full Name')}
          icon={
            <UserProfileImg strokeWidth={1.8} color={appColors.foodContent} />
          }
        />
        <TextInput
          placeholder={t('signIn.Email Address')}
          icon={<Atsign strokeWidth={1.8} color={appColors.foodContent} />}
        />
        <TextInput
          placeholder={t('signIn.Password')}
          icon={
            <FincncePassword strokeWidth={1.8} color={appColors.foodContent} />
          }
        />
      </View>
      <BtnView
        onBtnPress={() => {
          navigation.navigate('PhoneVerification');
        }}
        btnTitle={t('onBoarding.signIn')}
      />
      <TouchableOpacity activeOpacity={0.9}>
        <Text style={styles.text}>{t('financial.aleradyAccount')}</Text>
      </TouchableOpacity>
      <AuthBottom
        divivderImg={cabDivider}
        textStyle={[
          styles.textStyle,
          {
            backgroundColor: isDark ? appColors.blackColor : appColors.white,
          },
        ]}
        signInContainer={styles.signInContainer}
        signTxt={t('hotelBooking.signupWith')}
        onPress={() => {}}
        tintColor={'#A9A9A9'}
      />
      <View style={styles.padding}>
        <SocialBtn titleStyle={[styles.titleStyle,{ color: isDark ? appColors.white : appColors.cabText}]} />
      </View>
    </ScrollView>
  );
}
